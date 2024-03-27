import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import Table from '../components/content/Table';
import { useSelector } from 'react-redux';
import { decodeToken }  from 'react-jwt';

const Profile = () => {
  const authToken = useSelector(state => state.auth.authToken);
  const [userInfo, setUserInfo] = useState({});
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
      if (authToken) {
          const decodedToken = decodeToken(authToken);
          setUserInfo(decodedToken);
      }
  }, [authToken]);

  useEffect(() => {
      const updatedProfileData = [
        { title: 'Full name', value: userInfo.firstName + ' ' + userInfo.lastName, button: { title: 'Change', style: 'edit', link: '' } },
        { title: 'Website', value: 'NOT DYNAMIC YET', button: { title: 'Change', style: 'edit', link: '' } },
        { title: 'Email address', value: userInfo.emailAddress, button: { title: 'Change', style: 'edit', link: '' } },
        { title: 'Password', value: 'NOT DYNAMIC YET', button: { title: 'Change', style: 'edit', link: '' } },
        { title: 'Company info username', value: 'JNOT DYNAMIC YET', button: { title: 'Change', style: 'edit', link: '' } },
        { title: 'Company info password', value: 'NOT DYNAMIC YET', button: { title: 'Change', style: 'edit', link: '' } },
      ];
      setProfileData(updatedProfileData);
  }, [userInfo]);

    return (
        <div className='v-profile'>
            <DefaultLayout>
                <div className="v-profile__content-wrapper">
                  <div className="v-profile__content-container u-flex u-flex-v-center">

                    <div className="v-profile__image"></div>

                    <div className="v-profile__personal-information">
                      <div className="v-profile__breadcrumb-container">
                        <BreadCrumb />
                      </div>

                      <h2 className='v-profile__personal-information__name'>
                        { userInfo.firstName } { userInfo.lastName }
                      </h2>

                      <span className='v-profile__personal-information__email'>
                        { userInfo.emailAddress }
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