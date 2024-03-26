import React from 'react';
import validIcon from '../../icons/valid.svg';
import invalidIcon from '../../icons/invalid.svg';

const Input = ({ type, name, value, onChange, style, validationError, emailError, conflictError, technicalError, ignoreError='' }) => {
  const hasText = !!value;

  return (
    <div className={'c-form__input-wrapper u-flex'}>
      <input
        className={`c-form__input c-form__input--${style}`}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />

      { validationError || emailError || conflictError || technicalError ? (
        <img className='c-icon c-form__input-icon--invalid' src={invalidIcon} alt='Invalid Icon' />
      ) : hasText ? (
        <img className='c-icon c-form__input-icon--valid' src={validIcon} alt='Valid Icon' />
      ) : null }
      
      {validationError && <span className="c-form__input__error-message">{validationError}</span>}

      {emailError && !validationError && <span className="c-form__input__error-message">{emailError}</span>}

      {conflictError && !validationError && ignoreError === '' && <span className="c-form__input__error-message">{conflictError}</span>}
      {conflictError && !validationError && ignoreError === 'true' && <span className="c-form__input__error-message"></span>}

      {technicalError && !validationError && <span className="c-form__input__error-message">{technicalError}</span>}

    </div>
  );
};

export default Input;
