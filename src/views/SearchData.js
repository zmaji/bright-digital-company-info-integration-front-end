import React, { useState } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../components/elements/SearchBar';
import toast from 'react-hot-toast';
import companyService from '../services/companyService';

const SearchData = () => {
    const navigation = useNavigate();

    const handleSearch = async (searchTerm) => {
        if (searchTerm === '') {
          toast.error('Please enter a valid trade name');
        }

        const companies = await companyService.getCompanies(searchTerm);
        console.log(companies)

        if (companies && companies.item) {
          navigation('/companies', { state: { searchResults: companies.item } });
        } else {
          toast.error(`No companies found with trade name: ${searchTerm}`);
        }
    };

    return (
        <div className='v-search-data'>
            <DefaultLayout>
                <div className='v-search-data__content-wrapper'>
                  <div className="v-search-data__content-container u-flex">
                    
                    <div className="v-search-data__content-container-left">
                      <div className='v-search-data__breadcrumb-container'>
                        <BreadCrumb />
                      </div>

                      <div className='v-search-data__content-inner'>
                        <h1 className='v-search-data__content-title'>
                            Search for a company
                        </h1>

                        <p className='v-search-data__content-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus pharetra eros dui, et pellentesque est bibendum eget. 
                        Nullam ornare purus in turpis pharetra, eu congue arcu laoreet. 
                        </p>

                        <SearchBar onSearch={handleSearch} />

                        <p className='v-search-data__content-terms'>
                          By searching you agree with the&nbsp;
                          
                          <Link to='/' className='v-search-data__content-terms-link'>
                            terms & conditions
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="v-search-data__content-container-right">
                      <div className="v-search-data__image-container">
                        <div className="v-search-data__image">
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
            </DefaultLayout>
        </div>
    );
  };
export default SearchData;