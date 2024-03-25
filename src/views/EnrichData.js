import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/elements/Button';
import BreadCrumb from '../components/elements/BreadCrumb';
import Card from '../components/content/Card';
import Cards from '../components/content/Cards';

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

                    <Cards>
                      <div className='v-enrich-data__cards-container u-flex'>
                        <Card 
                          step='Step 1' 
                          title='Dolor sit amet' 
                          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.' 
                        />

                        <Card 
                          step='Step 2' 
                          title='Voluptat aenean' 
                          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.' 
                        />

                        <Card 
                          step='Step 3' 
                          title='Suspendise var' 
                          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.' 
                        />

                        <Card 
                          step='Step 4' 
                          title='Elit adipiscing' 
                          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.' 
                        />

                        <Card 
                          step='Step 5' 
                          title='Lorem ipsum' 
                          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.' 
                        />

                        <Card 
                          step='Step 6' 
                          title='Varius enim' 
                          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.' 
                        />
                      </div>
                    </Cards>

                    <Button title='Go to HubSpot' style='primary-gradient' link='' icon='ArrowRight' animation='move-right'/>
                  </div>
                </div>
            </DefaultLayout>
        </div>
    );
  };
export default EnrichData;