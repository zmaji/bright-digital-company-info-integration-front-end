import React from 'react';
import SignupHeader from '../components/header/SignupHeader';
import HorizontalSteps from '../components/Content/HorizontalSteps';
import userService from '../services/userService';
import toast from 'react-hot-toast';
import checkIcon from '../icons/check-solid.svg'
import mailIcon from '../icons/envelope-regular.svg'
import smileIcon from '../icons/face-smile-regular.svg'
import ActivateBar from '../components/Elements/ActivateBar';

const Activate = () => {
  const handleVerifyActivationCode = async (activationCode) => {
    const userId = localStorage.getItem('userId');
    const result = await userService.verifyActivationCode(userId, activationCode);

    if (result && result.status === 200) {
      localStorage.removeItem('userId');
      toast.success('Successfully activated account');
      window.location.href = '/';
    } else {
      toast.error('Something went wrong activating your account');
    }
  };

  const steps = [
    { title: "Register account", icon: checkIcon },
    { title: "Verify account", icon: mailIcon },
    { title: "Use features", icon: smileIcon },
  ];

  return (
    <div className="v-activate">
      <SignupHeader />
      <div className="v-activate__background-wrapper">
        <div className="o-container">
          <div className="u-squeeze u-squeeze--xl">
            <div className="v-activate__content-wrapper u-flex">
              <div className="v-activate__steps-container">
                <HorizontalSteps steps={steps} />
              </div>
              <div className="v-activate__content-container u-flex">
                <div className="v-activate__content-paragraph">
                  An activation code has been sent to your email address. Please verify your account.
                </div>
                <div className="v-activate__content-input">
                  <ActivateBar onSubmit={handleVerifyActivationCode} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activate;
