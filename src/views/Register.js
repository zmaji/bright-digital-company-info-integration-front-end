import React, { useState } from 'react';
import Button from '../components/Elements/Button';
import Form from '../components/form/Form';
import Label from '../components/form/Label'; 
import Input from '../components/form/Input';
import { Link } from 'react-router-dom';
import SignupHeader from '../components/header/SignupHeader';
import { validateForm } from '../helpers/validateFormData';
import userService from '../services/userService';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
    const navigation = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [termsAndConditions, setTermsAndConditions] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        setError('');
        setValidationErrors((prevErrors) => ({ ...prevErrors, firstName: '' }));
    };
    
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        setError('');
        setValidationErrors((prevErrors) => ({ ...prevErrors, lastName: '' }));
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError('');
        setEmailError('');
        setValidationErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
        setValidationErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    };

    const handleRepeatPasswordChange = (e) => {
        setRepeatPassword(e.target.value);
        setError('');
        setValidationErrors((prevErrors) => ({ ...prevErrors, repeatPassword: '' }));
    };

    // const handleTermsAndConditionsChange = (e) => {
    //     setTermsAndConditions(e.target.checked);
    //     setError('');
    //     setValidationErrors((prevErrors) => ({ ...prevErrors, termsAndConditions: '' }));
    // };

    const signUp = async () => {
      try {
        const formData = { firstName, lastName, email, password, repeatPassword };
        const errors = validateForm(formData);
        
        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            const response = await userService.register(firstName, lastName, email, password);

            if (response.status >= 200 && response.status < 300) {
                localStorage.setItem('userId', response.data.id); 
                // navigation('/activate');
                navigation('/');
            } else {
              if (response.status === 409) {
                setEmailError('Email address already exists.');
              }
            }
          } else {
            setValidationErrors(errors);
        }
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    };

    const handleSignUp = () => {
        toast.promise(
            signUp(),
          {
            loading: 'Registering account..',
            success: 'Successfully registered an account!',
            error: 'An error occurred while registering.',
          }
        ).catch(error => {
          console.error('Error processing account:', error);
          toast.error('Failed to process account, please contact an admin');
        });
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
                                <Input type="text" name="firstName" value={firstName} onChange={handleFirstNameChange} style='small' validationError={validationErrors.firstName} disabled={isSubmitting} />
                            </div>
                            
                            <div className="v-register-form__lastname-row u-flex">
                                <Label text='Last name'/>
                                <Input type="text" name='lastName' value={lastName} onChange={handleLastNameChange} style='small' validationError={validationErrors.lastName} disabled={isSubmitting} />
                            </div>
                        </div>

                        <Label text='E-mail address' />
                        <Input type="email" name="email" value={email} onChange={handleEmailChange} validationError={validationErrors.email} emailError={emailError} disabled={isSubmitting}/>

                        <Label text='Password' />
                        <Input type="password" name="password" value={password} onChange={handlePasswordChange} validationError={validationErrors.password} disabled={isSubmitting}/>

                        <Label text='Repeat password' />
                        <Input type="password" name="repeatPassword" value={repeatPassword} onChange={handleRepeatPasswordChange} validationError={validationErrors.repeatPassword} technicalError={error} disabled={isSubmitting}/>

                        {/* <div className="v-register-content__form-bar">
                            <div className="v-register-content__remember-me u-flex u-flex-v-center"> */}
                                {/* <Input type="checkbox" name='termsAndConditions' value={termsAndConditions} validationError={validationErrors.termsAndConditions}/> */}
                                {/* <span className='v-register-content__p-small'>
                                    By signing up I agree with the&nbsp;
                                    <Link to='/' className='v-register-content__sign-up--underline'>
                                        terms & conditions
                                    </Link>
                                </span> */}
                            {/* </div>
                        </div> */}
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
