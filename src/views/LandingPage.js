import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../components/elements/Button';
import Form from '../components/form/Form';
import Label from '../components/form/Label'; 
import Input from '../components/form/Input';
import HubspotSticker from '../components/elements/HubspotSticker';
import LogoRow from '../components/elements/LogoRow';
import brightDigitalLogo from '../images/logo-bright-zw.svg';
import LandingpageBackground from '../images/landingpage-background-image.png';
import logorowData from '../data/DefaultLogoRow';
import authService from '../services/authService';
import { validateForm } from '../helpers/validateFormData';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../store/authSlice';
import { setUserData } from '../store/userSlice';
import { useSelector } from 'react-redux';
import userService from '../services/userService';
import toast from 'react-hot-toast';

const LandingPage = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [conflictError, setConflictError] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError('');
        setEmailError('');
        setConflictError('');
        setValidationErrors((prevErrors) => ({ ...prevErrors, email: '' }));
      };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
        setConflictError('');
        setValidationErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    };

    const handleLogin = async () => {
      try {
        const formData = { email, password };
        const errors = validateForm(formData);

        if (Object.keys(errors).length === 0) {
          const response = await authService.login(email, password);

          if (response.status >= 200 && response.status < 300) {
              const token = response.data.result;
              
              if (token) {
                dispatch(setAuthToken(token));
                const currentUser = await userService.getUser(token);
                dispatch(setUserData(currentUser));
                toast.success('Successfully logged in!')
              }
          } else {
              if (response.status === 409) {
                  setEmailError('Email address does not exist.');
              } else if (response.status === 401) {
                  setConflictError('Email address and password do not match.');
              }
          }
        } else {
            setValidationErrors(errors);
        }
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred. Please try again later.');
      }
    };

    const userData = useSelector(state => state.user.userData);

    const navigate = async () => {
        try {
            if (userData && userData.data && userData.data.hubSpotPortalId) {
                navigation('/overview');
            } else {
                navigation('/install');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Unavailable to log in, please contact an admin');
        }
    }

    useEffect(() => {
        if (userData) {
            navigate();
        }
    }, [userData]);

    return (
        <div className='v-landingpage u-bg-color--light-blue'> 
            <div className="o-container">
                <div className="u-squeeze u-squeeze--xxl">
                    <div className='v-landingpage__header-container u-flex u-flex-sb u-flex-v-center'>
                            <img className="v-landingpage__header__logo-left" src={brightDigitalLogo} alt="Bright Digital Logo" />

                            <div className='v-landingpage__header__logo-right'>
                                <HubspotSticker />
                            </div>
                    </div>
                </div>
             </div>

            <div className="v-landingpage__content u-flex u-flex-v-center">
                <div className="v-landingpage__content-left">
                    <div className="v-landingpage__content-left-inner">
                        <div className="v-landingpage__content-left-inner-spacing">
                            <span className='v-landingpage__content__payoff'>The #1 HubSpot integration</span>

                            <h1 className='v-landingpage__content__title'>Company.info + HubSpot</h1>

                            <p className='v-landingpage__content__text'>
                                Discover the possiblities of connecting Company.Info with HubSpot and improve your sales process now!
                            </p>

                            <Form style='flex-column' error={error}>
                                <Label text='Email address' />
                                <Input type="email" name="name" value={email} onChange={handleEmailChange} icon='true' validationError={validationErrors.email} emailError={emailError} conflictError={conflictError}/>

                                <Label text='Password' />
                                <Input type="password" name="name" value={password} onChange={handlePasswordChange} icon='true' validationError={validationErrors.password} conflictError={conflictError} technicalError={error}/>

                                <div className="v-landingpage__content__form-bar u-flex u-flex-sb">
                                    <div className="v-landingpage__content__form-bar__remember u-flex">
                                        <Input type='checkbox' />
                                        <span className='v-landingpage__content__form-bar__remember-title'>Remember me</span>
                                    </div>
                                    <span className='v-landingpage__content__form-bar__password'>Forgot password?</span>
                                </div>
                            </Form>

                            <Button title='Sign in' style='primary_submit' icon='ArrowRight' animation='move-right' onClick={handleLogin}/>

                            <div className="v-landingpage__content__no-account u-flex u-flex-v-center">
                                <p className='v-landingpage__content__no-account__title'>Don't have an account?&nbsp;</p>
                                <Link to='/register' className='v-landingpage__content__no-account__title-secondary'>Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="v-landingpage__content-right">
                    <div className="v-landingpage__content-right-inner">
                        <div className="v-landingpage__content-right-inner-spacing">
                            <div className="v-landingpage__content__image-preview__container">
                                <img className="v-landingpage__content__image-preview__image" src={LandingpageBackground} alt="Bright Digital Logo" />
                            </div>

                            <div className="v-landingpage__content__logo-row">
                                <LogoRow logos={logorowData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
