import React, { useState, useEffect } from 'react';
import AdminLayout from '../components/Layout/AdminLayout';
import { useSelector } from 'react-redux';
import userService from '../services/userService';
import UserDetailsTable from '../components/Content/UserDetailTable';
import Modal from '../components/Elements/Modal';
import { useParams } from 'react-router-dom';
import Button from '../components/Elements/Button';
import { useNavigate } from 'react-router';

const UserDetail = () => {
  const authToken = useSelector((state) => state.auth.authToken);
  const [user, setUser] = useState(null);
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editContext, setEditContext] = useState(null);
  const { userId } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    const fetchUser = async (authToken, userId) => {
      if (authToken && userId) {
        const response = await userService.getUserById(authToken, userId);
        if (response) {
          setUser(response.data);
        }

        const currentAdmin = await userService.getUser(authToken);

        if (currentAdmin) {
          setCurrentAdmin(currentAdmin.data);
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

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const deleteUser = async () => {
    try {
      await userService.deleteUserById(authToken, userId);
      navigateBack();
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const navigateBack = async () => {
    navigation('/users');
  }

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
      'Company.info username': user.companyInfoUserName || '',
      'Company.info password': user.companyInfoPassword || '',
    };
  }

  const allowEdit = currentAdmin && currentAdmin.id !== user.id;

  return (
    <div className='v-user-detail'>
      <AdminLayout>
        <div className="v-user-detail__content-wrapper">

          <div className='c-signup-header__return-container'>
              <Button title='Return' style='tertiary' link='/users' icon='ArrowLeft' animation='move-left'/>
          </div>

          <div className="v-user-detail__content-container__inner u-flex u-flex-v-center'">
            <h1 className='v-user-detail__content-container__inner__title'>{user.firstName} {user.lastName}</h1>

            {allowEdit && (
              <div className="v-user-detail__button-container">
                <Button
                  title='Delete user'
                  style="primary"
                  icon='Close'
                  animation="move-right"
                  onClick={openDeleteModal}
                />
              </div>
            )}
          </div>
          {user && <UserDetailsTable userData={userData} openModal={openModal} allowEdit={allowEdit} />}
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

      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={closeDeleteModal}
        title='Delete User'
        content='Are you sure you want to delete this user? This action cannot be undone.'
        onConfirm={deleteUser}
        onCancel={closeDeleteModal}
        confirmText='Delete'
      />
    </div>
  );
};

export default UserDetail;
