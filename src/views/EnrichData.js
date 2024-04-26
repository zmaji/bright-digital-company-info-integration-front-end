import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/elements/Button';
import BreadCrumb from '../components/elements/BreadCrumb';
import Cards from '../components/content/Cards';
import enrichCardsData from '../data/EnrichCards';
import { useSelector } from 'react-redux';

const EnrichData = () => {
    const userData = useSelector(state => state.user.userData.data);

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

                    <Button title='Go to HubSpot' style='primary' link={`https://app-eu1.hubspot.com/contacts/${userData.hubSpotPortalId}/objects/0-2/views/all/list`} newTab='true' icon='ArrowRight' animation='move-right'/>
                  </div>
                </div>
            </DefaultLayout>
        </div>
    );
  };
export default EnrichData;