import React, { useState, useEffect } from 'react';
import Button from '../Elements/Button';
import { useNavigate } from 'react-router-dom';

const TableRow = ({ title, value, button }) => {
  const navigation = useNavigate();
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
    if (button.title === 'Edit') {
      navigation('/overview');
      console.log(navigation);
    } else {
      setIsEditing(true);
    }
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
            className='c-table-row__input'X
            autoFocus
          />
        ) : (
          <div className='c-table-row__title-container'>
            <div className='c-table-row__value'>{displayValue}</div>
          </div>
        )}
      </div>
      {button && (
        <div className='c-table-row__button-container' data-testid="table-row-button">
          <Button
            {...button}
            title={isEditing ? 'Submit' : button.title}
            onClick={isEditing ? handleSubmitClick : handleEditClick}
          />
        </div>
      )}
    </div>
  );
};

export default TableRow;
