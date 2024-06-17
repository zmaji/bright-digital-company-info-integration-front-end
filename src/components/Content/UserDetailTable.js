import React from 'react';
import UserDetailRow from '../Elements/UserDetailRow';

const UserDetailsTable = ({ userData, openModal }) => {
  const button = { title: 'Edit', style: 'edit' };

  return (
    <div className='c-details-table'>
      {Object.entries(userData).map(([key, value], index) => (
        <UserDetailRow key={index} label={key} value={value} button={button} openModal={openModal} />
      ))}
    </div>
  );
};

export default UserDetailsTable;
