import React from 'react';
import Button from '../components/elements/Button';
import Form from '../components/form/Form';
import Label from '../components/form/Label'; 
import Input from '../components/form/Input';
import brightDigitalLogo from '../images/logo-bright-zw.svg';
import arrowLeft from '../icons/arrow-left.svg';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='v-register u-flex'> 
            <div className="v-register-content__container-left u-bg-color--light-blue">
                <div className="v-register-content__container-left-inner">
                    <div className='v-register-content__header-container'>
                        <img className="v-register-content__bright-logo" src={brightDigitalLogo} alt="Bright Digital Logo" />
                    </div>

                    <div className='v-register-content__return-container u-flex u-flex-v-center'>
                        <img className="c-icon v-register-content__return-icon" src={arrowLeft} alt="Bright Digital Logo" />

                        <p className="v-register-content__return-title">
                          Return
                        </p>
                    </div>

                    <h1 className='v-register-content__h1-small'>
                        Sign up
                    </h1>

                    <div className="v-register-content__inner-content">
                        <Form style='flex-column'>
                          <div className='v-register-form__name-container u-flex-sb'>
                            <div className="v-register-form__name-row u-flex">
                              <Label text='First name'/>
                              <Input type="text" name="name" style='small' />
                            </div>
                            
                            <div className="v-register-form__lastname-row u-flex">
                              <Label text='Last name'/>
                              <Input type="text" name='name' style='small' />
                            </div>
                          </div>

                          <Label text='E-mail address' />
                          <Input type="email" name="name" />

                          <Label text='Password' />
                          <Input type="password" name="name" />

                          <Label text='Repeat password' />
                          <Input type="password" name="name" />

                          <div className="v-register-content__form-bar u-flex u-flex-sb">
                              <div className="v-register-content__remember-me u-flex">
                                  <Input type='checkbox' />
                                  <p className='v-register-content__p-small'>By signing up I agree with the&nbsp;
                                    <Link to='/' className='v-register-content__sign-up--underline'>
                                      terms & conditions
                                    </Link>
                                  </p>
                              </div>
                          </div>
                        </Form>

                        <Button title='Sign in' style='primary_submit' link='/overview'/>

                        <div className="v-register-content__no-account u-flex u-flex-v-center">
                            <p className='v-register-content__no-account__title'>Already have an account?&nbsp;</p>
                            <Link to='/' className='v-register-content__no-account__title-secondary'>Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="v-register-content__container-right u-bg-color--light-blue-alt">
                <div className="v-register-content__container-right-inner">
                    <div className='v-register-content__header-container v-register-content__header-container--right'>
                        <img className="v-register-content__review" src={brightDigitalLogo} alt="Bright Digital Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
