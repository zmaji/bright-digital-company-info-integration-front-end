import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import Table from '../components/content/Table';
import { useSelector } from 'react-redux';
import profileIcon from '../icons/profile.svg';
import userService from '../services/userService';
import { setUserData } from '../store/userSlice';
import { useDispatch } from 'react-redux';

const Profile = () => {
  const userData = useSelector(state => state.user.userData.data);
  const authToken = useSelector(state => state.auth.authToken);
  const dispatch = useDispatch();

  const [profileData, setProfileData] = useState([]);

  const firstName = userData ? userData.firstName : '';
  const lastName = userData ? userData.lastName : '';
  const emailAddress = userData ? userData.emailAddress : '';
  const domain = userData ? userData.domain : '';
  const companyInfoUserName = userData ? userData.companyInfoUserName : '';
  
  const updateUser = async (title, editableValue) => {
    const titleToFieldMap = {
      'First name': 'firstName',
      'Last name': 'lastName',
      'Email address': 'emailAddress',
      'Domain': 'domain',
      'Password': 'password',
      'Company info username': 'companyInfoUserName',
      'Company info password': 'companyInfoPassword'
    };

    const fieldName = titleToFieldMap[title];

    try {
      const updateFields = {
        [fieldName]: editableValue
      }

      await userService.updateUser(authToken, updateFields);
      const updatedUser = await userService.getUser(authToken);

      if (updateUser) {
        dispatch(setUserData(updatedUser));
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  useEffect(() => {
      const updatedProfileData = [
        { title: 'First name', value: firstName, button: { title: 'Change', style: 'edit', onClick: updateUser } },
        { title: 'Last name', value: lastName, button: { title: 'Change', style: 'edit', onClick: updateUser } },
        { title: 'Email address', value: emailAddress, button: { title: 'Change', style: 'edit', onClick: updateUser } },
        { title: 'Domain', value: domain, button: { title: 'Change', style: 'edit', onClick: updateUser } },
        { title: 'Password', value: '*******', button: { title: 'Change', style: 'edit', onClick: updateUser } },
        { title: 'Company info username', value: companyInfoUserName, button: { title: 'Change', style: 'edit', onClick: updateUser } },
        { title: 'Company info password', value: '*******', button: { title: 'Change', style: 'edit', onClick: updateUser } },
      ];
      setProfileData(updatedProfileData);
  }, [userData]);

    return (
        <div className='v-profile'>
            <DefaultLayout>
                <div className="v-profile__content-wrapper">
                  <div className="v-profile__content-container u-flex u-flex-v-center">

                    <img className='v-profile__profile-icon' src={profileIcon} alt='Profile icon' />

                    <div className="v-profile__personal-information">
                      <div className="v-profile__breadcrumb-container">
                        <BreadCrumb />
                      </div>

                      <h2 className='v-profile__personal-information__name'>
                        { firstName } { lastName }
                      </h2>

                      <span className='v-profile__personal-information__email'>
                        { emailAddress }
                      </span>
                    </div>

                  </div>

                  <div className="v-profile__content-container__inner">
                      <h1 className='v-profile__content-container__inner__title'>
                          Account
                      </h1>

                      <p className='v-profile__content-container__inner__text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse varius enim in eros.
                      </p>

                      <Table data={profileData} />
                  </div>
              </div>
            </DefaultLayout>
        </div>
    );
  };
export default Profile;