import React from 'react';

const Form = ({ style, children }) => {
  return (
    <form className={`c-form c-form--${style}`} data-testid="form-component">
      {children}
    </form>
  );
};

export default Form;