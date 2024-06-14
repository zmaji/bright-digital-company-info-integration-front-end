import React, { useState, useEffect } from 'react';
import AdminLayout from '../components/Layout/AdminLayout';
import { useSelector } from 'react-redux';
import userService from '../services/userService';
import Table from '../components/Content/Table';

const Users = () => {
  const authToken = useSelector((state) => state.auth.authToken);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async (authToken) => {
        if (authToken) {
            const users = await userService.getUsers(authToken);

            if (users) {
                setUsers(users);
                console.log('users', users);
            }
        }
    };
    fetchUsers(authToken);
}, [authToken]);

  const openModal = (title, editableValue) => {
    setEditContext({ title, editableValue });
    setIsModalOpen(true);
  };

  const userData = users.map(user => ({
    title: 'Email address',
    value: user.emailAddress,
    button: { title: 'Edit', style: 'edit', onClick: openModal }
  }));

  return (
    <div className='v-admin'>
      <AdminLayout>
        <div className="v-admin__content-wrapper">
          <div className="v-admin__content-container__inner">
            <h1 className='v-admin__content-container__inner__title'>Users</h1>

            <Table data={userData} />
          </div>
        </div>
      </AdminLayout>
    </div>
  );
};

export default Users;
