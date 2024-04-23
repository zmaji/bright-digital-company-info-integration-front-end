import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import { useLocation } from 'react-router-dom';
import companyService from '../services/companyService';
import Button from '../components/elements/Button';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import removeEmptyStrings from '../helpers/cleanObject';

const CompanyDetail = () => {
    const location = useLocation();
    const authToken = useSelector(state => state.auth.authToken);
    const [companyData, setCompanyData] = useState(null);
    const [cleanCompanyData, setCleanCompanyData] = useState(null);
    const [visibleItemCount, setVisibleItemCount] = useState(6);
  
    useEffect(() => {
        const fetchData = async () => {
            if (location && location.search) {
                const searchParams = new URLSearchParams(location.search);
                const dossierNumber = searchParams.get('dossierNumber');
                const company = await companyService.getCompany(dossierNumber);

                // const company = {
                //     assets: 867308,
                //     authorized_share_capital: "",
                //     authorized_share_capital_currency: "EUR",
                //     city_correspondence_address: "Apeldoorn",
                //     city_country: "",
                //     city_establishment_address: "Apeldoorn",
                //     continuation_date: "",
                //     correspondence_address: "Vosselmanstraat 300 7311VV Apeldoorn",
                //     country_correspondence_address: "Nederland",
                //     country_establishment_address: "Nederland",
                //     discontinuation_date: "",
                //     domain_name: "www.brightdigital.nl",
                //     dossier_number: 62801406,
                //     establishment_address: "Vosselmanstraat 300 7311VV Apeldoorn",
                //     establishment_date: "2015-03-05",
                //     establishment_number: 31778321,
                //     founder: "",
                //     founding_date: "2015-03-05",
                //     house_number_addition_correspondence_address: "",
                //     house_number_addition_establishment_address: "",
                //     house_number_and_addition: "",
                //     house_number_correspondence_address: 300,
                //     house_number_establishment_address: "300",
                //     indication_bankruptcy: "",
                //     indication_insolvency: "",
                //     indication_insolvency_number_description_date: "",
                //     indication_organisation_code: "O",
                //     industry_companyinfo: "",
                //     issued_share_capital: 1000,
                //     issued_share_capital_currency: "EUR",
                //     legal_form_code: 41,
                //     // legal_name: "Bright Digital B.V.",
                //     main_establishment_number: 85840408,
                //     main_establishment_number_direct: 91231779,
                //     mobile_number: "06 43218079",
                //     number_of_establishments: "",
                //     paid_up_share_capital: 1000,
                //     paid_up_share_capital_currency: "EUR",
                //     personnel_annual_reports: "",
                //     personnel_kvk: 16,
                //     postal_code: "",
                //     postalcode_correspondence_address: "7311VV",
                //     postalcode_establishment_address: "7311VV",
                //     primary_sbi_code: 7311,
                //     primary_sbi_code_text: "Reclamebureaus",
                //     profit: "",
                //     profit_currency: "",
                //     revenue: "",
                //     revenue_currency: "",
                //     rsin_number: "854962657",
                //     sbi_code_description: "",
                //     secondary_sbi_code2: "",
                //     street: "",
                //     street_correspondence_address: "Vosselmanstraat",
                //     street_establishment_address: "Vosselmanstraat",
                //     telephone_number: "",
                //     trade_name: "Bright Digital B.V.",
                //     trade_name_full: "Bright Digital B.V.",
                //     ws_indication_economically_active: "",
                //   };

                const cleanedData = await removeEmptyStrings(company);

                if (cleanedData) {
                    setCompanyData(company);
                    setCleanCompanyData(cleanedData);
                } else {
                    toast.error('Something went wrong, please contact an admin');
                }
            }
        };
        fetchData();
    }, [location.search]);

    const formatKey = (key) => {
        return key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    };

    const handleSeeMore = () => {
        setVisibleItemCount((prevCount) => prevCount + 6);
    };

    const showSeeMoreButton = cleanCompanyData && Object.keys(cleanCompanyData).length > visibleItemCount;
    
    const handleSaveCompany = async () => {
        if (companyData) {
            if (companyData.trade_name || companyData.trade_name_full || companyData.dossier_number) {
                const existingCompanies = await companyService.getHubSpotCompanies(authToken);

                const matchingCompany = existingCompanies.find(
                  (company) => {
                    const name = String(company.properties.name || '').trim().toLowerCase();
                    const tradeName = String(companyData.trade_name || '').trim().toLowerCase();
                    const tradeNameFull = String(companyData.trade_name_full || '').trim().toLowerCase();
                    const dossierNumber = String(company.properties.dossier_number || '').trim().toLowerCase();
                    const companyDossierNumber = String(companyData.dossier_number || '').trim().toLowerCase();
                
                    return (
                      name === tradeName || 
                      name === tradeNameFull || 
                      dossierNumber === companyDossierNumber
                    );
                  }
                );

                if (matchingCompany) {
                  const updatedCompany = await companyService.updateHubSpotCompany(authToken, matchingCompany.properties.hs_object_id, companyData);

                  if (updatedCompany) {
                    toast.success('Successfully updated company');
                  } else {
                    toast.error('Could not update company, please contact an admin');
                  }
                } else {
                  const newCompany = await companyService.createHubSpotCompany(authToken, companyData);

                  if (newCompany) {
                    toast.success('Successfully created company');
                  } else {
                    toast.error('Could not create company, please contact an admin');
                  }
                }
            } else {
                toast.error('No data found, please contact an admin.')
            }
        } else {
            toast.error('No data found, please contact an admin.')
        }
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
                            {cleanCompanyData ? cleanCompanyData.trade_name_full : "No trade name found"}
                        </h2>

                        <p className='v-company-detail__text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra eros dui, et pellentesque est bibendum eget. Nullam ornare purus in turpis pharetra, eu congue.
                        </p>

                        <Button title='Save in HubSpot' style='primary' icon='ArrowRight' animation='move-right' onClick={handleSaveCompany}/>
                      </div>

                      <div className="v-company-detail__content-container__right">
                        {cleanCompanyData && (
                            <React.Fragment>
                                <div className="v-company-detail__identification-container">
                                    <p className='v-company-detail__identification-title'>
                                        Identification characteristics
                                    </p>

                                    <div className="v-company-detail__properties u-flex">
                                        {Object.entries(cleanCompanyData)
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
                                        {cleanCompanyData &&
                                            Object.entries(cleanCompanyData)
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

                        {showSeeMoreButton && (
                            <Button
                                title="See more"
                                style="tertiary"
                                icon="ArrowDown"
                                animation="move-down"
                                onClick={handleSeeMore}
                            />
                        )}

                      </div>

                  </div>

                </div>
            </DefaultLayout>
        </div>
    );
};
export default CompanyDetail;
