import React, { useState, useEffect } from 'react';
import AdminLayout from '../components/Layout/AdminLayout';
import { useSelector } from 'react-redux';
import userService from '../services/userService';
import UserDetailsTable from '../components/Content/UserDetailTable';
import Modal from '../components/Elements/Modal';
import { useParams } from 'react-router-dom';
import Button from '../components/Elements/Button';

const UserDetail = () => {
  const authToken = useSelector((state) => state.auth.authToken);
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editContext, setEditContext] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async (authToken, userId) => {
      if (authToken && userId) {
        const response = await userService.getUserById(authToken, userId);
        if (response) {
          setUser(response.data);
        }
      }
    };
    fetchUser(authToken, userId);
  }, [authToken, userId]);

  const obscurePassword = (password) => {
    return '*'.repeat(password.length);
  };

  const openModal = (label, editableValue) => {
    const valueToEdit = label.toLowerCase().includes('password') ? editableValue : editableValue;
    setEditContext({ label, editableValue: valueToEdit });
    setIsModalOpen(true);
  };

  const handleModalConfirm = () => {
    if (editContext) {
      const { label, editableValue } = editContext;
      updateUser(label, editableValue);
    }
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const updateUser = async (label, editableValue) => {
    const titleToFieldMap = {
      'ID': 'id',
      'First name': 'firstName',
      'Last name': 'lastName',
      'Portal ID': 'hubSpotPortalId',
      'Email address': 'emailAddress',
      'Domain': 'domain',
      'Roles': 'roles',
      'Activated': 'isActive',
      'Password': 'password',
      'Company.info username': 'companyInfoUserName',
      'Company.info password': 'companyInfoPassword',
    };

    const fieldName = titleToFieldMap[label];
    let valueToUpdate = editableValue;

    if (label.toLowerCase().includes('password') && editableValue === obscurePassword(editableValue)) {
      valueToUpdate = user[fieldName];
    }

    if (fieldName === 'isActive') {
      valueToUpdate = editableValue === 'Yes';
    }

    try {
      const updateFields = {
        [fieldName]: valueToUpdate,
      };

      await userService.updateUserById(authToken, updateFields, userId);
      const updatedUser = await userService.getUserById(authToken, userId);

      if (updatedUser) {
        setUser(updatedUser.data);
        if (label.toLowerCase().includes('password')) {
          setEditContext({ ...editContext, editableValue: editableValue });
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  let userData = {
    'ID': user.id || '',
    'First name': user.firstName || '',
    'Last name': user.lastName || '',
    'Email address': user.emailAddress || '',
    'Roles': user.roles || '',
    'Activated': user.isActive ? 'Yes' : 'No',
  };
  
  if (!user.roles?.includes('Admin')) {
    userData = {
      ...userData,
      'Portal ID': user.hubSpotPortalId || '',
      'Domain': user.domain || '',
      'Company.info username': user.companyInfoUserName || '',
      'Company.info password': user.companyInfoPassword || '',
    };
  }

  return (
    <div className='v-user-detail'>
      <AdminLayout>
        <div className="v-user-detail__content-wrapper">
          <div className="v-user-detail__content-container__inner">

            <div className='c-signup-header__return-container u-flex-v-center'>
              <Button title='Return' style='tertiary' link='/users' icon='ArrowLeft' animation='move-left'/>
            </div>

            <h1 className='v-user-detail__content-container__inner__title'>{user.firstName} {user.lastName}</h1>

            {user && <UserDetailsTable userData={userData} openModal={openModal} />}
          </div>
        </div>
      </AdminLayout>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalCancel}
        title='Are you sure?'
        content={`You're about to change ${editContext?.label.toLowerCase() || 'this field'}`}
        onConfirm={handleModalConfirm}
        onCancel={handleModalCancel}
      />
    </div>
  );
};

export default UserDetail;
