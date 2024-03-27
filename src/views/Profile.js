import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import Table from '../components/content/Table';
import defaultProperties from '../data/DefaultProfile';
import { useSelector } from 'react-redux';
import { decodeToken }  from 'react-jwt';

const Profile = () => {
    const authToken = useSelector(state => state.auth.authToken);
    const [userInfo, setUserInfo] = useState({});

    console.log(authToken)
    console.log(authToken)
    console.log(authToken)
    console.log(authToken)
    console.log(authToken)
    console.log(authToken)

    useEffect(() => {
        if (authToken) {
            // Decode the token to extract user information
            const decodedToken = decodeToken(authToken);
            console.log('decodeToken')
            console.log(decodeToken)
            setUserInfo(decodedToken); // Set user info state
        }
    }, [authToken]);

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
                        { userInfo.firstName }
                      </h2>

                      <span className='v-profile__personal-information__email'>
                        john.doe@myemail.com
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

                      <Table data={defaultProperties} />
                  </div>
              </div>
            </DefaultLayout>
        </div>
    );
  };
export default Profile;