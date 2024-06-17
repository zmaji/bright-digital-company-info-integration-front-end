import React from 'react';
import UserDetailRow from '../Elements/UserDetailRow';

const UserDetailsTable = ({ userData }) => {
  const button = { title: 'Edit', style: 'edit' };

  console.log('userData in component');
  console.log(userData);

  return (
    <div className='c-details-table'>
      {Object.entries(userData).map(([key, value], index) => (
        <UserDetailRow key={index} label={key} value={value} button={button} />
      ))}
    </div>
  );
};

export default UserDetailsTable;
