import React, { useState, useEffect } from 'react';
import AdminLayout from '../components/Layout/AdminLayout';
import { useSelector } from 'react-redux';
import userService from '../services/userService';
import UserDetailsTable from '../components/Content/UserDetailTable';
import Modal from '../components/Elements/Modal';
import { useParams } from 'react-router-dom';

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

  const userData = {
    'ID': user.id || 'Undefined',
    'First name': user.firstName || 'Undefined',
    'Last name': user.lastName || 'Undefined',
    'Portal ID': user.hubSpotPortalId || 'Undefined',
    'Email address': user.emailAddress || 'Undefined',
    'Domain': user.domain || 'Undefined',
    'Roles': user.roles || 'Undefined',
    'Activated': user.isActive || 'Undefined',
    'Password': user.password || 'Undefined',
    'Company.info username': user.companyInfoUserName || 'Undefined',
    'Company.info password': user.companyInfoPassword || 'Undefined',
  };

  return (
    <div className='v-user-detail'>
      <AdminLayout>
        <div className="v-user-detail__content-wrapper">
          <div className="v-user-detail__content-container__inner">
            <h1 className='v-user-detail__content-container__inner__title'>{user.firstName} {user.lastName}</h1>
            {user && <UserDetailsTable userData={userData} openModal={openModal} />}
          </div>
        </div>
      </AdminLayout>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalCancel}
        title='Are you sure?'
        content={`You're about to change ${editContext?.label || 'this field'}`}
        onConfirm={handleModalConfirm}
        onCancel={handleModalCancel}
      />
    </div>
  );
};

export default UserDetail;
