import React, { useState } from 'react';
import DefaultLayout from '../components/Layout/DefaultLayout';
import Button from '../components/Elements/Button';
import BreadCrumb from '../components/Elements/BreadCrumb';
import Cards from '../components/Content/Cards';
import workFlowCardsData from '../data/WorkflowCards';
import { useSelector } from 'react-redux';
import Modal from '../components/Elements/Modal';

const Workflow = () => {
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
            link={`https://app-eu1.hubspot.com/workflows/${userData.hubSpotPortalId}/view/default`}
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
        <div className='v-workflow'>
            <DefaultLayout>
                <div className='v-workflow__background'>
                </div>

                <div className='v-workflow__content-wrapper'>
                  <div className='v-workflow__breadcrumb-container'>
                    <BreadCrumb />
                  </div>

                  <div className='v-workflow__content-container'>
                    <div className='v-workflow__content-inner'>
                        <h1 className='v-workflow__content-title'>
                            Set-up a custom workflow action
                        </h1>

                        <p className='v-workflow__content-text'>
                        By placing a custom action into your workflow, you can update a company based on various situations, such as a monthly update for every company. This ensures that all relevant information is accurate and reflects the latest business details.
                        </p>
                    </div>

                    <div className="v-workflow__cards-container">
                      <Cards cardData={workFlowCardsData} customStyles={['c-cards--flex']} />
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
export default Workflow;