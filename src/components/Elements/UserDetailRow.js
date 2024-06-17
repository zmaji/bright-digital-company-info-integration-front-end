import React, { useState, useEffect } from 'react';
import Button from '../Elements/Button';

const UserDetailRow = ({ label, value, button, openModal }) => {
  const [editableValue, setEditableValue] = useState(value);
  const [isEditing, setIsEditing] = useState(false);
  const [displayValue, setDisplayValue] = useState(value);

  const obscurePassword = (password) => {
    return '*'.repeat(password.length);
  };

  const handleChange = (event) => {
    setEditableValue(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmitClick = () => {
    setIsEditing(false);
    openModal(label, editableValue);
  };

  useEffect(() => {
    if (label.toLowerCase().includes('password')) {
      setDisplayValue(obscurePassword(value));
    } else {
      setDisplayValue(value);
    }
  }, [value]);

  return (
    <div className='c-user-detail-row u-flex'>
      <div className='c-user-detail-row__line'></div>
      <div className='c-user-detail-row__content-container u-flex u-flex-v-center'>
        <div className="c-user-detail-row__label-container">
          <div className='c-user-detail-row__label'>{label}</div>
        </div>
        <div className="c-user-detail-row__value-container">
          {isEditing ? (
            <input
              type={label.toLowerCase().includes('password') ? 'password' : 'text'}
              value={editableValue}
              onChange={handleChange}
              className='c-table-row__input'
              autoFocus
            />
          ) : (
            <div className='c-user-detail-row__value'>{displayValue}</div>
          )}
        </div>
        {button && (
          <div className='c-user-detail-row__button-container' data-testid="user-row-button">
            <Button
              {...button}
              title={isEditing ? 'Submit' : button.title}
              onClick={isEditing ? handleSubmitClick : handleEditClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetailRow;
