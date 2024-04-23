import React, { useState } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../components/elements/SearchBar';
import toast from 'react-hot-toast';
import companyService from '../services/companyService';
import { useSelector } from 'react-redux';

const SearchCompany = () => {
    const navigation = useNavigate();
    const authToken = useSelector(state => state.auth.authToken);
    const userData = useSelector(state => state.user.userData.data);

    const handleSearch = async (searchTerm) => {
        if (searchTerm === '') {
          toast.error('Please enter a valid trade name');
        }

        if (userData && userData.companyInfoUserName && userData.companyInfoPassword) {
          const companies = await companyService.getCompanies(searchTerm, authToken);

          if (companies && companies.item) {
            navigation('/search-company/search-results', { state: { searchResults: companies.item } });
          } else {
            toast.error(`No companies found with trade name: ${searchTerm}`);
          }
        } else {
          toast.error('No Company.info credentials found, please enter them at your profile');
        }
    };

    return (
        <div className='v-search-company'>
            <DefaultLayout>
                <div className='v-search-company__content-wrapper'>
                  <div className="v-search-company__content-container u-flex">
                    
                    <div className="v-search-company__content-container-left">
                      <div className='v-search-company__breadcrumb-container'>
                        <BreadCrumb />
                      </div>

                      <div className='v-search-company__content-inner'>
                        <h1 className='v-search-company__content-title'>
                            Search for a company
                        </h1>

                        <p className='v-search-company__content-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus pharetra eros dui, et pellentesque est bibendum eget. 
                        Nullam ornare purus in turpis pharetra, eu congue arcu laoreet. 
                        </p>

                        <SearchBar onSearch={handleSearch} />

                        <p className='v-search-company__content-terms'>
                          By searching you agree with the&nbsp;
                          
                          <Link to='/' className='v-search-company__content-terms-link'>
                            terms & conditions
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="v-search-company__content-container-right">
                      <div className="v-search-company__image-container">
                        <div className="v-search-company__image">
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
            </DefaultLayout>
        </div>
    );
  };
export default SearchCompany;