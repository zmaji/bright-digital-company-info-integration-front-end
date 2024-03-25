import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/elements/Button';
import BreadCrumb from '../components/elements/BreadCrumb';

const Profile = () => {
    return (
        <div className='v-install-script'>
            <DefaultLayout>
                <div className="v-install-script__background">
                </div>

                <div className="v-install-script__content-wrapper">
                  <div className="v-install-script__breadcrumb-container">
                    <BreadCrumb />
                  </div>

                  <div className='v-install-script__content-container u-flex'>
                    <div className="v-install-script__content-left">
                        <h1 className='v-install-script__content-title'>
                            Install script
                        </h1>

                        <p className='v-install-script__content-text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Phasellus pharetra eros dui, et pellentesque est bibendum eget. 
                          Nullam ornare purus in turpis pharetra, eu congue arcu laoreet. 
                        </p>

                        <Button title='Copy' style='tertiary' link='' icon='Download' animation='move-down' customStyle='large'/>
                    </div>

                    <div className='v-install-script__content-right'>
                      <h2 className='v-install-script__content-title-secondary'>
                            Next steps
                      </h2>
                    </div>
                  </div>
                </div>
            </DefaultLayout>
        </div>
    );
  };
export default Profile;