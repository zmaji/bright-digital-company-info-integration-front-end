import React from 'react';

const Input = ({ type, name, onChange, value, style }) => {
  return (
    <input className={`c-form__input c-form__input--${style}`} type={type} name={name} onChange={onChange} value={value} />
  );
};

export default Input;