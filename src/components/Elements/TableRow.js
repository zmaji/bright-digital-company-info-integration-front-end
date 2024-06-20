import React, { useState, useEffect } from 'react';
import Button from '../Elements/Button';

const TableRow = ({ title, value, button }) => {
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
    if (button.onClick) {
      button.onClick(title, editableValue);
      if (title.toLowerCase().includes('password')) {
        setDisplayValue(obscurePassword(editableValue));
      } else {
        setDisplayValue(editableValue);
      }
    }
  };

  const handleCancelClick = () => {
    setEditableValue(value);
    setIsEditing(false);
  };

  useEffect(() => {
    if (title.toLowerCase().includes('password')) {
      setDisplayValue(obscurePassword(value));
    } else {
      setDisplayValue(value);
    }
  }, [value]);

  return (
    <div className='c-table-row u-flex'>
      <div className='c-table-row__line'></div>
      <div className='c-table-row__content-container u-flex'>
        {title && (
          <div className='c-table-row__title-container'>
            <div className='c-table-row__title'>{title}</div>
          </div>
        )}
        {isEditing ? (
          <input
            type={title.toLowerCase().includes('password') ? 'password' : 'text'}
            value={editableValue}
            onChange={handleChange}
            className='c-table-row__input'
            autoFocus 
          />
        ) : (
          <div className='c-table-row__title-container'>
            <div className='c-table-row__value'>{displayValue}</div>
          </div>
        )}
      </div>
      {button && (
        <div className='c-table-row__button-container u-flex u-flex-v-center' data-testid="table-row-button">
          <Button
            {...button}
            title={isEditing ? 'Submit' : button.title}
            onClick={isEditing ? handleSubmitClick : handleEditClick}
          />
          {isEditing && (
            <div className='c-user-detail-row__cancel-button' data-testid="user-row-button">
              <Button
                {...button}
                title={'Cancel'}
                onClick={handleCancelClick}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TableRow;
