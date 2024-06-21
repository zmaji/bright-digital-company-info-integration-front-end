import React, { useState } from 'react';
import DefaultLayout from '../components/Layout/DefaultLayout';
import Button from '../components/Elements/Button';
import BreadCrumb from '../components/Elements/BreadCrumb';
import Cards from '../components/Content/Cards';
import syncCardsData from '../data/SyncCards';
import { useSelector } from 'react-redux';
import Modal from '../components/Elements/Modal';

const SyncCompany = () => {
    const userData = useSelector(state => state.user.userData.data);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const handleModalConfirm = () => {
      setIsModalOpen(false);
    };
  
    const handleModalCancel = () => {
      setIsModalOpen(false);
    };

    const renderButton = () => {
      if (userData && userData.companyInfoUserName && userData.companyInfoPassword) {
        return (
          <Button
            title="Go to HubSpot"
            style="primary"
            newTab="true"
            link={`https://app-eu1.hubspot.com/contacts/${userData.hubSpotPortalId}/objects/0-2/views/all/list`}
            icon="ArrowRight"
            animation="move-right"
          />
        );
      } else {  
        return (
          <Button
            title="Go to HubSpot"
            style="primary"
            icon="ArrowRight"
            animation="move-right"
            onClick={openModal}
          />
        );
      }
    };

    return (
        <div className='v-sync-company'>
            <DefaultLayout>
                <div className='v-sync-company__background'>
                </div>

                <div className='v-sync-company__content-wrapper'>
                  <div className='v-sync-company__breadcrumb-container'>
                    <BreadCrumb />
                  </div>

                  <div className='v-sync-company__content-container'>
                    <div className='v-sync-company__content-inner'>
                        <h1 className='v-sync-company__content-title'>
                            Synchronise a company
                        </h1>

                        <p className='v-sync-company__content-text'>
                        By searching for information based on the company's trade name, the system automatically fetches your company's data. This ensures that all relevant information is accurate and reflects the latest business details. Additionally, you can resync as needed or update the latest information about a company.
                        </p>
                    </div>

                    <div className="v-sync-company__cards-container">
                      <Cards cardData={syncCardsData} customStyles={['c-cards--flex']} />
                    </div>

                   {renderButton()}
                  </div>
                </div>

                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={handleModalCancel}
                  title='This action uses Company.info credits'
                  content='Please navigate to your profile page and enter your Company.info username and password'
                  onConfirm={handleModalConfirm}
                  onCancel={handleModalCancel}
              />
            </DefaultLayout>
        </div>
    );
  };
export default SyncCompany;