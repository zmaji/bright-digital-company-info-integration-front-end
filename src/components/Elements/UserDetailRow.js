import React from 'react';
import Button from '../Elements/Button';

const UserDetailRow = ({ label, value, button }) => {
  return (
    <div className='c-user-detail-row u-flex'>
      <div className='c-user-detail-row__line'></div>

      <div className='c-user-detail-row__content-container u-flex u-flex-v-center'>

        <div className="c-user-detail-row__label-container">
            <div className='c-user-detail-row__label'>{label}</div>
        </div>

        <div className="c-user-detail-row__value-container">
            <div className='c-user-detail-row__value'>{value}</div>
        </div>

        {button && (
          <div className='c-user-detail-row__button-container' data-testid="user-row-button">
            <Button {...button} title={button.title} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetailRow;
