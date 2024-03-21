import React from 'react';
import brightDigitalLogo from '../images/logo-bright-zw.svg';

import Button from '../components/elements/Button';
import Form from '../components/form/Form';
import Label from '../components/form/Label'; 
import Input from '../components/form/Input';
import HubspotSticker from '../components/elements/HubspotSticker';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className='v-landingpage u-bg-color--light-blue'> 
            <div className="o-container">
                <div className="u-squeeze u-squeeze-xxxl">
                    <div className='v-landingpage__header-container u-flex u-flex-sb u-flex-v-center'>
                        <img className="v-landingpage__header__logo-left" src={brightDigitalLogo} alt="Bright Digital Logo" />

                        <div className='v-landingpage__header__logo-right'>
                            <HubspotSticker />
                        </div>
                    </div>
                </div>

                <div className="v-landingpage__content u-flex u-flex-sb">
                    <div className="v-landingpage__content-left">
                        <span className='v-landingpage__content__payoff'>The #1 HubSpot integration to improve your sales</span>

                        <h1 className='v-landingpage__content__title'>Company.info + HubSpot</h1>

                        <p className='v-landingpage__content__text'>
                            Discover the possiblities of connecting Company.Info with HubSpot and improve your sales process now!
                        </p>

                        <Form style='flex-column'>
                            <Label text='Email address' />
                            <Input type="email" name="name" />

                            <Label text='Password' />
                            <Input type="password" name="name" />

                            <div className="v-landingpage__content__form-bar u-flex u-flex-sb">
                                <div className="v-landingpage__content__form-bar__remember u-flex">
                                    <Input type='checkbox' />
                                    <span className='v-landingpage__content__form-bar__remember-title'>Remember me</span>
                                </div>
                                <span className='v-landingpage__content__form-bar__password'>Forgot password?</span>
                            </div>
                        </Form>

                        <Button title='Sign in' style='primary_submit' link='/install' icon='ArrowRight' animation='move-right'/>

                        <div className="v-landingpage__content__no-account u-flex u-flex-v-center">
                            <p className='v-landingpage__content__no-account__title'>Don't have an account?&nbsp;</p>
                            <Link to='/register' className='v-landingpage__content__no-account__title-secondary'>Sign up</Link>
                        </div>
                    </div>
                    
                    <div className="v-landingpage__content-right">
                        <span className='v-landingpage-content__left-inner__payoff'>The #1 HubSpot integration to improve your sales</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
