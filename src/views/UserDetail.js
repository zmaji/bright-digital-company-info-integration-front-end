import React, { useState, useEffect } from 'react';
import AdminLayout from '../components/Layout/AdminLayout';
import { useSelector } from 'react-redux';
import userService from '../services/userService';
import UserDetailsTable from '../components/Content/UserDetailTable';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const authToken = useSelector((state) => state.auth.authToken);
  const [user, setUser] = useState(null);
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
            {user && <UserDetailsTable userData={userData} />} {/* Conditional rendering */}
          </div>
        </div>
      </AdminLayout>
    </div>
  );
};

export default UserDetail;
