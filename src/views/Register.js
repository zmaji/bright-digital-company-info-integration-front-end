import React, { useState } from 'react';
import Button from '../components/elements/Button';
import Form from '../components/form/Form';
import Label from '../components/form/Label'; 
import Input from '../components/form/Input';
import { Link } from 'react-router-dom';
import SignupHeader from '../components/header/SignupHeader';
import { validateForm } from '../helpers/validateFormData';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };
    
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRepeatPasswordChange = (e) => {
        setRepeatPassword(e.target.value);
    };

    const handleSignUp = () => {
        const formData = { firstName, lastName, email, password, repeatPassword };
        const errors = validateForm(formData);
        
        if (Object.keys(errors).length === 0) {
            // TODO: PROCEED WITH LOGIC
        } else {
            setValidationErrors(errors);
        }
    };


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
                                <Input type="text" name="firstName" value={firstName} onChange={handleFirstNameChange} style='small' validationError={validationErrors.firstName} />
                            </div>
                            
                            <div className="v-register-form__lastname-row u-flex">
                                <Label text='Last name'/>
                                <Input type="text" name='lastName' value={lastName} onChange={handleLastNameChange} style='small' validationError={validationErrors.lastName} />
                            </div>
                        </div>

                        <Label text='E-mail address' />
                        <Input type="email" name="email" value={email} onChange={handleEmailChange} validationError={validationErrors.email} />

                        <Label text='Password' />
                        <Input type="password" name="password" value={password} onChange={handlePasswordChange} validationError={validationErrors.password} />

                        <Label text='Repeat password' />
                        <Input type="password" name="repeatPassword" value={repeatPassword} onChange={handleRepeatPasswordChange} validationError={validationErrors.repeatPassword} />

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

                    <Button title='Sign up' style='primary_submit' icon='ArrowRight' animation='move-right' onClick={handleSignUp}/>

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
