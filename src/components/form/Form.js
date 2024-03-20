import React from 'react';

const Form = ({ style, children }) => {
  return (
    <form className={`c-form c-form--${style}`}>
      {children}
    </form>
  );
};

export default Form;