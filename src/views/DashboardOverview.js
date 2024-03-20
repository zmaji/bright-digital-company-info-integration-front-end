import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/elements/Button';
import Cards from '../components/content/Cards';
import Card from '../components/content/Card';

const DashboardOverview = () => {
    return (
        <div className='v-dashboard-overview'>
            <DefaultLayout>
                <div className='v-dashboard-overview__content-container'>
                    <h1 className='v-dashboard-overview__content-title'>
                        Start retrieving Bright data
                    </h1>

                    <p className='v-dashboard-overview__content-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus. 
                    </p>

                    <Button title='Set up properties' style='primary' link='/' icon='Plus' animation='move-right' />
                </div>

                    <Cards>
                      <div className="v-dashboard-overview__cards-container">
                        <Card 
                          icon='LightBulb' 
                          title='Install script' 
                          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.' 
                          button={{
                            title: 'Start now',
                            style: 'secondary',
                            link: '/',
                            icon: 'ArrowRight',
                            animation: 'move-right'
                          }}
                        />

                        <Card 
                          icon='LightBulb' 
                          title='Install script' 
                          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.' 
                          button={{
                            title: 'Start now',
                            style: 'secondary',
                            link: '/',
                            icon: 'ArrowRight',
                            animation: 'move-right'
                          }}
                        />

                        <Card 
                          icon='LightBulb' 
                          title='Install script' 
                          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.' 
                          button={{
                            title: 'Start now',
                            style: 'secondary',
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