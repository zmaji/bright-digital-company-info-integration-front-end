import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/elements/Button';
import Cards from '../components/content/Cards';
import Card from '../components/content/Card';

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

                    <Cards>
                      <div className="v-dashboard-overview__cards-container">
                        <Card 
                          icon='DownloadGradient' 
                          title='Install script' 
                          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.' 
                          button={{
                            title: 'Start now',
                            style: 'tertiary',
                            link: '/install-script',
                            icon: 'ArrowRight',
                            animation: 'move-right'
                          }}
                        />

                        <Card 
                          icon='LightBulbGradient' 
                          title='Enricht existing data' 
                          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.' 
                          button={{
                            title: 'Start now',
                            style: 'tertiary',
                            link: '/enrich-data',
                            icon: 'ArrowRight',
                            animation: 'move-right'
                          }}
                        />

                        <Card 
                          icon='SearchGradient' 
                          title='Search for data' 
                          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.' 
                          button={{
                            title: 'Start now',
                            style: 'tertiary',
                            link: '/',
                            icon: 'ArrowRight',
                            animation: 'move-right'
                          }}
                        />
                      </div>
                    </Cards>

            </DefaultLayout>
        </div>
    );
  };
export default DashboardOverview;