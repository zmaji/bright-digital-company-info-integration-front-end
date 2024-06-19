import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SignupHeader from '../components/header/SignupHeader';
import HorizontalSteps from '../components/Content/HorizontalSteps';
import userService from '../services/userService';
import toast from 'react-hot-toast';
import checkIcon from '../icons/check-solid.svg'
import mailIcon from '../icons/envelope-regular.svg'
import smileIcon from '../icons/face-smile-regular.svg'
import ActivateBar from '../components/Elements/ActivateBar';
import { useNavigate } from 'react-router-dom';

const Activate = () => {
  const navigation = useNavigate();
  const authToken = useSelector((state) => state.auth.authToken);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUser = await userService.getUser(authToken);

        if (currentUser) {
          console.log(currentUser)
          if (currentUser.data.isActive === false) {
            setUser(currentUser.data);
          } else {
            navigation('/');
          }
        }
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };

    fetchCurrentUser();
  }, [authToken]);

  const verifyActivationCode = async (activationCode) => {
    try {
      const result = await userService.verifyActivationCode(user.id, activationCode);
  
      if (result && result.status === 200) {
        window.location.href = '/';
      } else {
        throw new Error('Activation code did not match');
      }
    } catch (error) {
      console.error('Error processing activation:', error);
      throw error;
    }
  };
  
  const handleVerifyActivationCode = (activationCode) => {
    toast.promise(
      verifyActivationCode(activationCode),
      {
        loading: 'Activating account..',
        success: 'Account successfully activated!',
        error: 'Activation code did not match..',
      }
    ).catch(error => {
      console.error('Error processing activation:', error);
      toast.error('Failed to process activation, please contact an admin');
    });
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
            <div className="v-activate__content-wrapper">
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
