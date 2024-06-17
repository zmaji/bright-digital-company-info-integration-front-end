import React from 'react';
import UserRow from '../Elements/UserRow';

const UserTable = ({ data }) => {
    return (
        <div className='c-table'>
          {data.map((rowData, index) => (
              <UserRow 
                key={index} 
                userId={rowData.userId}
                firstName={rowData.firstName} 
                lastName={rowData.lastName} 
                emailAddress={rowData.emailAddress} 
                button={rowData.button}
              />
          ))}
        </div>
    );
};

export default UserTable;
