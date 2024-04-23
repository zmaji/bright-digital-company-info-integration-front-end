import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import Button from '../components/elements/Button';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const CompanyDetail = () => {
    const authToken = useSelector(state => state.auth.authToken);

    return (
        <div className='v-properties'>
            <DefaultLayout>
                <div className="v-properties__content-wrapper">
                  <div className="v-properties__breadcrumb-container u-flex">
                    <BreadCrumb />
                  </div>

                  <div className="v-properties__content-container u-flex">

                      <div className="v-properties__content-container__left">
                        <h2 className='v-properties__title'>
                        </h2>

                        <p className='v-properties__text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra eros dui, et pellentesque est bibendum eget. Nullam ornare purus in turpis pharetra, eu congue.
                        </p>

                        <Button title='Save in HubSpot' style='primary' icon='ArrowRight' animation='move-right'/>
                      </div>

                      <div className="v-properties__content-container__right">
                                <div className="v-properties__identification-container">
                                    <p className='v-properties__identification-title'>
                                        Identification characteristics
                                    </p>

                                    <div className="v-properties__properties u-flex">
                             
                                    </div>
                                    
                                    <div className='v-properties__line'></div>
                                </div>

                                <div className="v-properties__company-info-container">
                                    <p className='v-properties__identification-title'>
                                        Company characteristics
                                    </p>

                                    <div className="v-properties__properties u-flex">
                              
                                    </div>
                                </div>
                      </div>
                  </div>
                </div>
            </DefaultLayout>
        </div>
    );
};
export default CompanyDetail;
