
import React, { useState } from 'react';
import Button from '../elements/Button';

const TableRow = ({ title, value, button }) => {
  const [editableValue, setEditableValue] = useState(value);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    setEditableValue(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmitClick = () => {
    setIsEditing(false);
    if (button.onClick) {
      button.onClick(editableValue);
    }
  };

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
            type='text'
            value={editableValue}
            onChange={handleChange}
            className='c-table-row__input'
            autoFocus
          />
        ) : (
          <div className='c-table-row__title-container'>
            <div className='c-table-row__value'>{editableValue}</div>
          </div>
        )}
      </div>
      {button && (
        <div className='c-table-row__button-container'>
          <Button
            {...button}
            title={isEditing ? 'Submit' : 'Change'}
            onClick={isEditing ? handleSubmitClick : handleEditClick}
          />
        </div>
      )}
    </div>
  );
};

export default TableRow;
