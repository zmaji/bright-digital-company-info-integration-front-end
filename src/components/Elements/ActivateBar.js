import React, { useState } from 'react';
import Button from '../Elements/Button'

const ActivateBar = ({ onSubmit }) => {
  const [activationCode, setActivationCode] = useState('');

  const handleChange = (e) => {
    setActivationCode(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(activationCode);
  };

  return (
    <div className="c-activation-bar">
        <form className="c-activation-bar__container">
        <input
            type="search"
            placeholder="Activation code"
            value={activationCode}
            onChange={handleChange}
            className="c-activation-bar__input"
        />
        <div className="c-activation-bar__button-container u-flex u-flex-center">
            <Button title='Activate' style='primary_search' icon='Plus' animation='move-right' customStyle='medium' onClick={handleSubmit} className='c-activation-bar__button'/>
        </div>
        </form>
    </div>
  );
};

export default ActivateBar;
