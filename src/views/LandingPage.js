import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../components/elements/Button';
import Form from '../components/form/Form';
import Label from '../components/form/Label'; 
import Input from '../components/form/Input';
import HubspotSticker from '../components/elements/HubspotSticker';
import LogoRow from '../components/elements/LogoRow';
import brightDigitalLogo from '../images/logo-bright-zw.svg';
import ImagePreview from '../images/Image-preview.png';
import logorowData from '../data/DefaultLogoRow';
import authService from '../services/authService';

const LandingPage = () => {
    const navigation = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        try {
            const response = await authService.login(email, password);

            if (response.ok) {
                navigation('/overview');
            } else {
                const data = await response.json();
                setError(data.message || 'An error occurred while logging in');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again later.');
        }
    };

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

            <div className="v-landingpage__content u-flex u-flex-sb">
                <div className="v-landingpage__content-left">
                    <div className="v-landingpage__content-left-inner">
                        <div className="v-landingpage__content-left-inner-spacing">
                            <span className='v-landingpage__content__payoff'>The #1 HubSpot integration</span>

                            <h1 className='v-landingpage__content__title'>Company.info + HubSpot</h1>

                            <p className='v-landingpage__content__text'>
                                Discover the possiblities of connecting Company.Info with HubSpot and improve your sales process now!
                            </p>

                            <Form style='flex-column'>
                                <Label text='Email address' />
                                <Input type="email" name="name" onChange={handleEmailChange} />

                                <Label text='Password' />
                                <Input type="password" name="name" onChange={handlePasswordChange} />

                                <div className="v-landingpage__content__form-bar u-flex u-flex-sb">
                                    <div className="v-landingpage__content__form-bar__remember u-flex">
                                        <Input type='checkbox' />
                                        <span className='v-landingpage__content__form-bar__remember-title'>Remember me</span>
                                    </div>
                                    <span className='v-landingpage__content__form-bar__password'>Forgot password?</span>
                                </div>
                            </Form>

                            {/* link='/install' */}
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
                        <div className="v-landingpage__content__image-preview__container">
                            <img className="v-landingpage__content__image-preview__image" src={ImagePreview} alt="Bright Digital Logo" />
                        </div>

                        <div className="v-landingpage__content__logo-row">
                            <LogoRow logos={logorowData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
