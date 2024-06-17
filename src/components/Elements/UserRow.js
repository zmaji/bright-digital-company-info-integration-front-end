import React from 'react';
import Button from '../Elements/Button';

const UserRow = ({ userId, firstName, lastName, emailAddress, button }) => {
  return (
    <div className='c-user-row u-flex'>
      <div className='c-user-row__line'></div>

      <div className='c-user-row__content-container u-flex'>
        <div className='c-user-row__name-container'>
            <div className='c-user-row__firstname'>{firstName}</div>
            <div className='c-user-row__lastname'>{lastName}</div>
        </div>

        <div className='c-user-row__email-container'>
            <div className='c-user-row__emailaddress'>{emailAddress}</div>
        </div>
      </div>

      {button && (
        <div className='c-user-row__button-container' data-testid="user-row-button">
          <Button
            {...button}
            title={button.title}
            link={`/users/${encodeURIComponent(userId)}`}
          />
        </div>
      )}
    </div>
  );
};

export default UserRow;
