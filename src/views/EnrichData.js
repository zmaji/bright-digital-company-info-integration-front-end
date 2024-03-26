import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/elements/Button';
import BreadCrumb from '../components/elements/BreadCrumb';
import Cards from '../components/content/Cards';
import enrichCardsData from '../data/EnrichCards'

const EnrichData = () => {
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
                            Enrich existing data
                        </h1>

                        <p className='v-enrich-data__content-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus pharetra eros dui, et pellentesque est bibendum eget.
                        </p>
                    </div>

                    <Cards cardData={enrichCardsData} customStyles={['c-cards--flex', 'c-cards--margin-bottom']} />

                    <Button title='Go to HubSpot' style='primary-gradient' link='' icon='ArrowRight' animation='move-right'/>
                  </div>
                </div>
            </DefaultLayout>
        </div>
    );
  };
export default EnrichData;