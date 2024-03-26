import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/elements/Button';
import Cards from '../components/content/Cards';
import overviewCardsData from '../data/OverviewCards';

const DashboardOverview = () => {
    return (
        <div className='v-dashboard-overview'>
            <DefaultLayout padding='default'>
              <div className="v-dashboard-overview__content-wrapper">
                <div className='v-dashboard-overview__content-container u-flex'>
                    <h1 className='v-dashboard-overview__content-title'>
                          Start retrieving <br /> Bright data
                      </h1>

                      <p className='v-dashboard-overview__content-text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse varius enim in eros elementum tristique. 
                      </p>

                      <Button title='Set up properties' style='primary' link='/' icon='Plus' animation='move-right' />
                  </div>
                </div>

                <Cards cardData={overviewCardsData} customStyles={['c-cards--flex', 'c-cards--default-margin', 'c-cards--sb']} />
            </DefaultLayout>
        </div>
    );
  };
export default DashboardOverview;