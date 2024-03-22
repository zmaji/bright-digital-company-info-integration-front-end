import React from 'react';
import Button from '../components/elements/Button';
import Form from '../components/form/Form';
import Label from '../components/form/Label'; 
import Input from '../components/form/Input';
import { Link } from 'react-router-dom';
import SignupHeader from '../components/header/SignupHeader';

const Register = () => {
    return (
        <div className='v-register u-bg-color--light-blue'> 
            <div className="v-register-header">
                <SignupHeader />
            </div>

            <div className="v-register-content__wrapper u-flex u-flex-center">
                <div className="v-register-content__container">
                    <h1 className='v-register-content__h1-small'>
                        Sign up
                    </h1>

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
                                <span className='v-register-content__p-small'>
                                    By signing up I agree with the&nbsp;
                                    <Link to='/' className='v-register-content__sign-up--underline'>
                                        terms & conditions
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </Form>

                    <Button title='Sign in' style='primary_submit' link='/' icon='ArrowRight' animation='move-right'/>

                    <div className="v-register-content__no-account u-flex u-flex-v-center">
                        <p className='v-register-content__no-account__title'>Already have an account?&nbsp;</p>
                        <Link to='/' className='v-register-content__no-account__title-secondary'>Sign in</Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Register;
