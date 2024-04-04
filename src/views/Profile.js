import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import Table from '../components/content/Table';
import { useSelector } from 'react-redux';
import profileIcon from '../icons/profile.svg';

const Profile = () => {
  const userData = useSelector(state => state.user.userData.data);

  const [profileData, setProfileData] = useState([]);

  const firstName = userData ? userData.firstName : 'First name not found';
  const lastName = userData ? userData.lastName : 'Last name not found';
  const emailAddress = userData ? userData.emailAddress : 'Email address not found';
  const domain = userData ? userData.domain : 'Domain not found';
  // const companyInfoUserName = userData ? userData.companyInfoUserName : 'Company info username not found';

  useEffect(() => {
      const updatedProfileData = [
        { title: 'Full name', value: firstName + ' ' + lastName, button: { title: 'Change', style: 'edit', link: '' } },
        { title: 'Website', value: domain, button: { title: 'Change', style: 'edit', link: '' } },
        { title: 'Email address', value: emailAddress, button: { title: 'Change', style: 'edit', link: '' } },
        { title: 'Password', value: '********', button: { title: 'Change', style: 'edit', link: '' } },
        // { title: 'Company info username', value: companyInfoUserName, button: { title: 'Change', style: 'edit', link: '' } },
        // { title: 'Company info password', value: '********', button: { title: 'Change', style: 'edit', link: '' } },
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