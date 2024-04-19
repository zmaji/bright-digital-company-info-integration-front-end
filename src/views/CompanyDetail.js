import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import { useLocation } from 'react-router-dom';
import companyService from '../services/companyService';
import Button from '../components/elements/Button';

const CompanyDetail = () => {
    const location = useLocation();
    const [companyData, setCompanyData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (location) {
                const searchParams = new URLSearchParams(location.search);
                const dossierNumber = searchParams.get('dossierNumber');
                const company = await companyService.getCompany(dossierNumber);
                setCompanyData(company);
                console.log(company)
            } else {
                setCompanyData(null);
            }
        };
        fetchData();
    }, [location.search]);

    return (
        <div className='v-company-detail'>
            <DefaultLayout>
                <div className="v-company-detail__content-wrapper">
                  <div className="v-company-detail__breadcrumb-container u-flex">
                    <BreadCrumb />
                  </div>

                  <div className="v-company-detail__content-container u-flex">

                      <div className="v-company-detail__content-container__left">
                        <h2 className='v-company-detail__title'>
                            {companyData ? companyData.trade_name_full : "No trade name found"}
                        </h2>

                        <p className='v-company-detail__text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra eros dui, et pellentesque est bibendum eget. Nullam ornare purus in turpis pharetra, eu congue.
                        </p>

                        <Button title='Save in HubSpot' style='primary' link='/' icon='ArrowRight' animation='move-right'/>
                      </div>

                      <div className="v-company-detail__content-container__right">
                        {companyData && (
                            <React.Fragment>
                                <div className="v-company-detail__identification-container">
                                    <p className='v-company-detail__identification-title'>
                                        Identification characteristics
                                    </p>
                                    <div className='v-company-detail__line'></div>
                                </div>

                                <div className="v-company-detail__company-info-container">
                                    <p className='v-company-detail__identification-title'>
                                        Company characteristics
                                    </p>

                                    {Object.entries(companyData).map(([key, value]) => (
                                        <div key={key} className="v-company-detail__properties">
                                            <p className='v-company-detail__property-title'>{key}</p>
                                            <p className='v-company-detail__property-value'>{value}</p>
                                        </div>
                                    ))}
                                 </div>
                                <div className='v-company-detail__line'></div>
                            </React.Fragment>
                        )}

                        <Button title='See more' style='tertiary' link='/' icon='ArrowDown' animation='move-down'/>

                      </div>

                  </div>

                </div>
            </DefaultLayout>
        </div>
    );
  };
export default CompanyDetail;