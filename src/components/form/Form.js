import React from 'react';

const Form = ({ style, children, error }) => {
  return (
    <form className={`c-form c-form--${style}`}>
      {children}
    </form>
  );
};

export default Form;