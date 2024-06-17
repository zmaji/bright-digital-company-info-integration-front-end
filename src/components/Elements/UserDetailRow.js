import React, { useState, useEffect } from 'react';
import Button from '../Elements/Button';

const UserDetailRow = ({ label, value, button, openModal }) => {
  const [editableValue, setEditableValue] = useState(value);
  const [isEditing, setIsEditing] = useState(false);
  const [displayValue, setDisplayValue] = useState(value);
  const roles = ['Gebruiker', 'Admin'];

  const obscurePassword = (password) => '*'.repeat(password.length);

  const handleChange = (event) => {
    setEditableValue(event.target.value);
  };

  const handleCheckboxChange = (role) => {
    const updatedRoles = editableValue.includes(role)
      ? editableValue.filter((r) => r !== role)
      : [...editableValue, role];
    setEditableValue(updatedRoles);
  };

  const handleDropdownChange = (event) => {
    setEditableValue(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmitClick = () => {
    setIsEditing(false);
    openModal(label, editableValue);
  };

  const handleCancelClick = () => {
    setEditableValue(value);
    setIsEditing(false);
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
        <div className={`c-user-detail-row__value-container`}>
          {isEditing ? (
            label === 'Activated' ? (
              <select
                value={editableValue === 'Yes' ? 'Yes' : 'No'}
                onChange={handleDropdownChange}
                className='c-table-row__dropdown'
                autoFocus
              >
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              </select>
            ) : label === 'Roles' ? (
              <div className='c-user-detail-row__checkbox-container u-flex'>
                {roles.map((role) => (
                  <label key={role} className='c-table-row__checkbox'>
                    <input
                      type="checkbox"
                      checked={editableValue.includes(role)}
                      onChange={() => handleCheckboxChange(role)}
                    />
                    <span className='c-user-detail-row__value'>{role}</span>
                  </label>
                ))}
              </div>
            ) : (
              <input
                type={label.toLowerCase().includes('password') ? 'password' : 'text'}
                value={editableValue}
                onChange={handleChange}
                className='c-table-row__input'
                autoFocus
              />
            )
          ) : (
            <div className='c-user-detail-row__value'>
              {label === 'Roles'
                ? editableValue.join(', ')
                : displayValue}
            </div>
          )}
        </div>
        {button && label !== 'ID' && (
          <div className='c-user-detail-row__button-container' data-testid="user-row-button">
            <Button
              {...button}
              title={isEditing ? 'Submit' : button.title}
              onClick={isEditing ? handleSubmitClick : handleEditClick}
            />
          </div>
        )}

        {button && label !== 'ID' && isEditing && (
          <div className='c-user-detail-row__cancel-button' data-testid="user-row-button">
            <Button
              {...button}
              title={'Cancel'}
              onClick={handleCancelClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetailRow;
