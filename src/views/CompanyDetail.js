import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import { useLocation } from 'react-router-dom';
import companyService from '../services/companyService';
import Button from '../components/elements/Button';
import toast from 'react-hot-toast';

const CompanyDetail = () => {
    const location = useLocation();
    const [companyData, setCompanyData] = useState(null);
    const [visibleItemCount, setVisibleItemCount] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            if (location && location.search) {
                const searchParams = new URLSearchParams(location.search);
                const dossierNumber = searchParams.get('dossierNumber');
                const company = await companyService.getCompany(dossierNumber);

                if (company) {
                    setCompanyData(company);
                    console.log(company);
                } else {
                    toast.error('Not enough credits to perform this action, please contact an admin');
                }
            }
        };
        fetchData();
    }, [location.search]);

    const formatKey = (key) => {
        return key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    };

    const handleSeeMore = () => {
        setVisibleItemCount(prevCount => prevCount + 10);
    };

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

                                    <div className="v-company-detail__properties u-flex">
                                        {Object.entries(companyData)
                                            .filter(([key]) => ['dossier_number', 'rsin_number', 'establishment_number'].includes(key))
                                            .map(([key, value]) => (
                                                (typeof value === 'string' || typeof value === 'number') && (value !== null && value !== '') && (
                                                    <div key={key} className="v-company-detail__property">
                                                        <p className='v-company-detail__property-title'>{formatKey(key)}</p>
                                                        <p className='v-company-detail__property-value'>{value}</p>
                                                    </div>
                                                )
                                        ))}
                                    </div>
                                    
                                    <div className='v-company-detail__line'></div>
                                </div>

                                <div className="v-company-detail__company-info-container">
                                    <p className='v-company-detail__identification-title'>
                                        Company characteristics
                                    </p>

                                    <div className="v-company-detail__properties u-flex">
                                        {companyData &&
                                            Object.entries(companyData)
                                                .filter(([key]) => !['dossier_number', 'rsin_number', 'establishment_number'].includes(key))
                                                .slice(0, visibleItemCount)
                                                .map(([key, value]) => (
                                                    (typeof value === 'string' || typeof value === 'number') && (value !== null && value !== '') && (
                                                        <div key={key} className="v-company-detail__property">
                                                            <p className='v-company-detail__property-title'>{formatKey(key)}</p>
                                                            <p className='v-company-detail__property-value'>{value}</p>
                                                        </div>
                                                    )
                                            ))}
                                    </div>
                                </div>
                            </React.Fragment>
                        )}

                        {visibleItemCount < (companyData ? Object.keys(companyData).length : 0) && (
                            <Button title='See more' style='tertiary' link='/' icon='ArrowDown' animation='move-down' onClick={handleSeeMore} />
                        )}

                      </div>

                  </div>

                </div>
            </DefaultLayout>
        </div>
    );
};
export default CompanyDetail;
