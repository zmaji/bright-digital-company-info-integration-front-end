import React from 'react';
import validIcon from '../../icons/valid.svg';
import invalidIcon from '../../icons/invalid.svg';

const Input = ({ type, name, value, onChange, style, validationError, emailError, conflictError, technicalError }) => {
  const hasText = !!value;

  const renderIcon = (isValid) => {
    const className = `c-icon c-form__input-icon--${isValid ? 'valid' : 'invalid'}${style === 'small' ? '-small' : ''}`;
    const iconSrc = isValid ? validIcon : invalidIcon;
    return <img className={className} src={iconSrc} alt={isValid ? 'Valid Icon' : 'Invalid Icon'} />;
  };

  const renderErrorMessage = (error) => {
    return error && <span className="c-form__input__error-message">{error}</span>;
  };

  return (
    <div className={'c-form__input-wrapper u-flex'}>
      <input
        className={`c-form__input c-form__input--${style}`}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />

      { (validationError || emailError || conflictError || technicalError) ? 
        renderIcon(false) :
        hasText && renderIcon(true)
      }

      {renderErrorMessage(emailError || validationError || conflictError || technicalError)}
    </div>
  );
};

export default Input;
