import React from 'react';

const Input = ({ type, name, onChange, value }) => {
  return (
    <input className='c-form__input' type={type} name={name} onChange={onChange} value={value} />
  );
};

export default Input;