import React, { useState } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/Elements/Button';
import BreadCrumb from '../components/Elements/BreadCrumb';
import Cards from '../components/content/Cards';
import enrichCardsData from '../data/EnrichCards';
import { useSelector } from 'react-redux';
import Modal from '../components/Elements/Modal';

const EnrichData = () => {
    const userData = useSelector(state => state.user.userData.data);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (searchTerm) => {
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
        <div className='v-enrich-data'>
            <DefaultLayout>
                <div className='v-enrich-data__background'>
                </div>

                <div className='v-enrich-data__content-wrapper'>
                  <div className='v-enrich-data__breadcrumb-container'>
                    <BreadCrumb />
                  </div>

                  <div className='v-enrich-data__content-container'>
                    <div className='v-enrich-data__content-inner'>
                        <h1 className='v-enrich-data__content-title'>
                            Enrich a company
                        </h1>

                        <p className='v-enrich-data__content-text'>
                            Streamline the process of keeping the selected company's information up to date. By entering a new dossier number or updating an existing one, the system automatically fetches and updates your company's data. This ensures that all relevant information is accurate and reflects the latest business details.
                        </p>
                    </div>

                    <div className="v-enrich-data__cards-container">
                      <Cards cardData={enrichCardsData} customStyles={['c-cards--flex']} />
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
export default EnrichData;