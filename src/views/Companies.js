import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import { useLocation } from 'react-router-dom';
import ResultTable from '../components/content/ResultTable';

const Companies = () => {
    const location = useLocation();
    const [companyData, setCompanyData] = useState([]);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    useEffect(() => {
        if (location.state && location.state.searchResults) {
            const companies = location.state.searchResults;
            const updatedCompanyData = companies.map(company => ({
                name: company.name,
                address: company.correspondence_street,
                location: capitalizeFirstLetter(company.correspondence_city),
                button: { title: 'More information', style: 'tertiary', link: '/', icon: 'ArrowRight', animation: 'move-right'}
            }));
    
            setCompanyData(updatedCompanyData);
        } else {
            setCompanyData([]);
        }
    }, [location.state]);

    return (
        <div className='v-search-results'>
            <DefaultLayout>
                <div className="v-search-results__content-wrapper">
                  <div className="v-search-results__content-container u-flex">

                      <div className="v-search-results__breadcrumb-container">
                        <BreadCrumb />
                      </div>

                      <h2 className='v-search-results__title'>
                        Search results
                      </h2>

                      <p className='v-search-results__text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                      </p>

                      <ResultTable data={companyData} />
                  </div>

                </div>
            </DefaultLayout>
        </div>
    );
  };
export default Companies;