import React from 'react';
import brightDigitalLogo from '../images/logo-bright-zw.svg';
import Button from '../components/elements/Button';
import Form from '../components/form/Form';
import Label from '../components/form/Label'; 
import Input from '../components/form/Input';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className='v-landingpage u-flex'> 
            <div className="v-landingpage-content__container-left u-bg-color--light-blue">
                <div className="v-landingpage-content__container-left-inner">
                    <div className='v-landingpage-content__header-container'>
                        <img className="v-landingpage-content__bright-logo" src={brightDigitalLogo} alt="Bright Digital Logo" />
                    </div>

                    <p className='v-landingpage-content__p'>
                        The #1 HubSpot integration to improve your sales
                    </p>

                    <h1 className='v-landingpage-content__h1-small'>
                        Company.info + HubSpot
                        <span className='v-landingpage-content__span'>Make your data Bright</span>
                    </h1>

                    <div className="v-landingpage-content__inner-content">
                        <p>
                            Discover the possibilities of connecting Company.Info with HubSpot and improve your sales process now!
                        </p>

                        <Form style='flex-column'>
                            <Label text='Email address' />
                            <Input type="email" name="name" />

                            <Label text='Password' />
                            <Input type="password" name="name" />

                            <div className="v-landingpage-content__form-bar u-flex u-flex-sb">
                                <div className="v-landingpage-content__remember-me u-flex">
                                    <Input type='checkbox' />
                                    <p className='v-landingpage-content__p-small'>Remember me</p>
                                </div>
                                <p className='v-landingpage-content__p-small--underline'>Forgot password?</p>
                            </div>
                        </Form>

                        <Button title='Sign in' style='primary_submit' link='/install'/>

                        <div className="v-landingpage-content__no-account u-flex u-flex-v-center">
                            <p className='v-landingpage-content__no-account__title'>Don't have an account?&nbsp;</p>
                            <Link to='/register' className='v-landingpage-content__no-account__title-secondary'>Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="v-landingpage-content__container-right u-bg-color--light-blue-alt">
                <div className="v-landingpage-content__container-right-inner">
                    <div className='v-landingpage-content__header-container v-landingpage-content__header-container--right'>
                        <img className="v-landingpage-content__review" src={brightDigitalLogo} alt="Bright Digital Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
