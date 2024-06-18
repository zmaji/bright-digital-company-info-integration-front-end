import React, { useState } from 'react';
import AdminLayout from '../components/Layout/AdminLayout';s
import userService from '../services/userService';
import Button from '../components/Elements/Button';
import Form from '../components/form/Form';
import Label from '../components/form/Label'; 
import Input from '../components/form/Input';
import { validateForm } from '../helpers/validateFormData';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UserCreate = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); 
  const [sendValidationEmail, setSendValidationEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigation = useNavigate();

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

  const handleAdminChange = (e) => {
    setIsAdmin(e.target.checked);
  };

  const handleValidationEmailChange = (e) => {
    setSendValidationEmail(e.target.checked);
  };

  const createUser = async () => {
    const formData = { firstName, lastName, email, password, repeatPassword };
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
        try {
            const response = await userService.register(firstName, lastName, email, password, isAdmin, sendValidationEmail);

            if (response.status >= 200 && response.status < 300) {
                navigation('/users');
                return Promise.resolve();
            } else {
                if (response === 409) {
                    setEmailError('Email address already exists.');
                    return Promise.reject(new Error('Email address already exists.'));
                }
                return Promise.reject(new Error('Registration failed.'));
            }
        } catch (error) {
            if (error.status !== 409) {
              console.error('Error:', error);
              setError('An error occurred. Please try again later.');
              return Promise.reject(error);
            }
        }
    } else {
        setValidationErrors(errors);
        return Promise.reject(new Error('Validation errors occurred.'));
    }
  };

  const handleCreateUser = () => {
      toast.promise(
        createUser(),
        {
          loading: 'Creating new user..',
          success: 'Successfully created a new user',
          error: (err) => err.message,
        }
      ).catch(error => {
        console.error('Error processing user:', error);
      });
    };

  return (
    <div className='v-user-create'>
      <AdminLayout>
        <div className='v-user-create__return-container u-flex-v-center'>
              <Button title='Return' style='tertiary' link='/users' icon='ArrowLeft' animation='move-left'/>
        </div>

        <div className="v-user-create__content-wrapper">
          <div className="v-user-create__content-container__inner">
            <h1 className='v-user-create__content-container__inner__title'>Create user</h1>
          </div>
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
                
                <div className='v-user-create__checkbox-container u-flex'>
                  <label className='v-user-create__checkbox-label u-flex u-flex-v-center'>
                    <input className='v-user-create__checkbox-input' type="checkbox" checked={isAdmin} onChange={handleAdminChange} disabled={isSubmitting} />
                    <div className="v-user-create__checkbox-text">
                        Make user an admin
                    </div>
                  </label>

                  <label className='v-user-create__checkbox-label u-flex u-flex-v-center'>
                    <input className='v-user-create__checkbox-input' type="checkbox" checked={sendValidationEmail} onChange={handleValidationEmailChange} disabled={isSubmitting} />
                    <div className="v-user-create__checkbox-text">
                        Send validation email
                    </div>
                  </label>
                </div>
            </Form>

            <Button title='Create' style='primary_submit' icon='ArrowRight' animation='move-right' onClick={handleCreateUser}/>
        </div>
      </AdminLayout>
    </div>
  );
};

export default UserCreate;
