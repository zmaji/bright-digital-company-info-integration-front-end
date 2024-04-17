import React from 'react';

const Label = ({ text }) => {
  return (
    <label className='c-form__label' data-testid="label-component">
      { text }
    </label>
  );
};

export default Label;