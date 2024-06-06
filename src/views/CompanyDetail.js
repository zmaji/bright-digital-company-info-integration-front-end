import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/Layout/DefaultLayout';
import BreadCrumb from '../components/Elements/BreadCrumb';
import { useLocation } from 'react-router-dom';
import companyService from '../services/companyService';
import Button from '../components/Elements/Button';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import removeEmptyStrings from '../helpers/cleanObject';
import propertyService from '../services/propertyService';

const CompanyDetail = () => {
    const location = useLocation();
    const authToken = useSelector(state => state.auth.authToken);
    const userData = useSelector(state => state.user.userData.data);
    const [companyData, setCompanyData] = useState(null);
    const [cleanCompanyData, setCleanCompanyData] = useState(null);
    const [visibleItemCount, setVisibleItemCount] = useState(6);
  
    useEffect(() => {
        const fetchData = async () => {
            if (location && location.search) {
                const searchParams = new URLSearchParams(location.search);
                const dossierNumber = searchParams.get('dossierNumber');
                const establishmentNumber = searchParams.get('establishmentNumber');
                const company = await companyService.getCompany(dossierNumber, establishmentNumber, authToken);

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

    const formatResult = async (companyData) => {
        try {
          const currentProperties = await propertyService.getProperties(authToken);
      
          if (currentProperties) {
            const filteredCompanyData = Object.keys(companyData)
              .filter((key) => {
                const property = currentProperties.find((prop) => prop.name === key);
                return property && property.toSave;
              })
              .reduce((obj, key) => {
                obj[key] = companyData[key];
                return obj;
              }, {});

              if (companyData.dossier_number) {
                filteredCompanyData.dossier_number = companyData.dossier_number;
              }
              if (companyData.establishment_number) {
                filteredCompanyData.establishment_number = companyData.establishment_number;
              }        

            return filteredCompanyData;
          }
        } catch (error) {
          console.error('Error fetching properties:', error);
        }
      };
    
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
                
                console.log('companyData')
                console.log(companyData)

                const formattedCompanyData = await formatResult(companyData);

                console.log('formattedCompanyData')
                console.log(formattedCompanyData)

                if (matchingCompany) {
                  const updatedCompany = await companyService.updateHubSpotCompany(authToken, matchingCompany.properties.hs_object_id, formattedCompanyData);

                  if (updatedCompany) {
                    toast.success('Successfully updated company');
                    window.open(`https://app-eu1.hubspot.com/contacts/${userData.hubSpotPortalId}/objects/0-2/views/all/list`, '_blank');
                  } else {
                    toast.error('Could not update company, please contact an admin');
                  }
                } else {
                  const newCompany = await companyService.createHubSpotCompany(authToken, formattedCompanyData);

                  if (newCompany) {
                    toast.success('Successfully created company');
                    window.open(`https://app-eu1.hubspot.com/contacts/${userData.hubSpotPortalId}/objects/0-2/views/all/list`, '_blank');
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
                        The properties displayed are based on your customized settings. By clicking the button, you can automatically create a new company record or update an existing one in HubSpot. If the information requires adjustments, feel free to make changes before saving.
                        </p>

                        <Button title='Save in HubSpot' style='primary' icon='Plus' animation='none' onClick={handleSaveCompany}/>
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
