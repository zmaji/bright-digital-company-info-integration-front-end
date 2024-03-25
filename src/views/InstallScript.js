import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/elements/Button';

// Breadcrumb component

const InstallScript = () => {
    return (
        <div className='v-install-script'>
            <DefaultLayout>
                <div className="v-install-script__background">
                  <div className="v-install-script__content-wrapper">
                    <div className='v-install-script__content-container u-flex'>
                      <h1 className='v-install-script__content-title'>
                            Install script
                        </h1>

                        <p className='v-install-script__content-text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Phasellus pharetra eros dui, et pellentesque est bibendum eget. 
                          Nullam ornare purus in turpis pharetra, eu congue arcu laoreet. 
                        </p>

                        <Button title='Copy' style='tertiary' link='' icon='Download' animation='move-down' />
                    </div>
                  </div>
                </div>
            </DefaultLayout>
        </div>
    );
  };
export default InstallScript;