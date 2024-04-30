import React, { useState } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../components/elements/SearchBar';
import toast from 'react-hot-toast';
import companyService from '../services/companyService';
import { useSelector } from 'react-redux';
import Modal from '../components/elements/Modal';

const SearchCompany = () => {
    const navigation = useNavigate();
    const authToken = useSelector(state => state.auth.authToken);
    const userData = useSelector(state => state.user.userData.data);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState(false);

    const openModal = (searchTerm) => {
      setIsModalOpen(true);
      setSearchTerm(searchTerm);
    };
  
    const handleProfileConfirm = () => {
      navigation('/profile');
      setIsModalOpen(false);
    };

    const handleSearchConfirm = () => {
      handleSearch(searchTerm);
      setIsModalOpen(false);
    };
  
    const handleModalCancel = () => {
      setIsModalOpen(false);
    };

    const handleSearch = async (searchTerm) => {
        if (searchTerm === '') {
          toast.error('Please enter a valid trade name');
        } else {
          if (userData && userData.companyInfoUserName && userData.companyInfoPassword) {
            const companies = await companyService.getCompanies(searchTerm, authToken);
  
            if (companies && companies.item) {
              navigation('/search-company/search-results', { state: { searchResults: companies.item } });
            } else {
              toast.error(`No companies found with trade name: ${searchTerm}`);
            }
          } else {
            openModal();
          }
        }
    };

    const modalTitle = userData && userData.companyInfoUserName && userData.companyInfoPassword ? 'Are you sure?' : 'Missing credentials'
    const modalText = userData && userData.companyInfoUserName && userData.companyInfoPassword ? 'This action uses Company.info credits' : 'Please navigate to your profile page and enter your Company.info username and password'
    const modalConfirm = userData && userData.companyInfoUserName && userData.companyInfoPassword ? handleSearchConfirm : handleProfileConfirm; 

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
                            Search company
                        </h1>

                        <p className='v-search-company__content-text'>
                        Quickly find companies by entering a trade name into the search bar. With just one click on the search button, you'll retrieve a comprehensive list of all companies that match your search.
                        </p>

                        <SearchBar onSearch={openModal} />

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

              <Modal
                isOpen={isModalOpen}
                onRequestClose={handleModalCancel}
                title={modalTitle}
                content={modalText}
                onConfirm={modalConfirm}
                onCancel={handleModalCancel}
              />
            </DefaultLayout>
        </div>
    );
  };
export default SearchCompany;