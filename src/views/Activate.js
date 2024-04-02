import React, { useState } from 'react';
import Button from '../components/elements/Button';
import SignupHeader from '../components/header/SignupHeader';
import Input from '../components/form/Input';
import userService from '../services/userService';

const Activate = () => {
   const [activationCode, setActivationCode] = useState('');

    const handleActivationCodeChange = (e) => {
      setActivationCode(e.target.value);
    };

    const handleVerifyActivationCode = async () => {
      const result = userService.verifyActivationCode(activationCode);

      if (result.status === 200) {
        console.log('ACTIVATED!!!!!!!!!!!');
      }
    };

    return (
        <div className='v-activate'>
          <SignupHeader />
          <div className="v-activate__background-wrapper">
            <div className='o-container'>
              <div className='u-squeeze u-squeeze--xl'>
                <div className="v-activate__content-wrapper">
                  <div className="v-activate__content-container u-flex">
                    <Input type="text" Name="Enter activation code" onChange={handleActivationCodeChange} value={activationCode} />
                    <Button onClick={handleVerifyActivationCode} title='Continue' style='primary' link='/' icon='ArrowRight' animation='move-right'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  };

export default Activate;