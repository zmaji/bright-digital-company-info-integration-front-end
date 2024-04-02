import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/elements/Button';
import Cards from '../components/content/Cards';
import overviewCardsData from '../data/OverviewCards';
import groupService from '../services/groupService';
import { useSelector } from 'react-redux';

const DashboardOverview = () => {
    const authToken = useSelector(state => state.auth.authToken);

    const handleCreateProperties = async () => {
      try {
        const group = await groupService.createGroup(authToken, 'company', 'company_info_integration');
        
        if (group) {
          console.log('found group');
        } else {
          console.log('no group found');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

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

                      <Button title='Set up properties' style='primary' icon='Plus' animation='move-right' onClick={handleCreateProperties} />
                  </div>
                </div>

                <Cards cardData={overviewCardsData} customStyles={['c-cards--flex', 'c-cards--default-margin', 'c-cards--sb']} />
            </DefaultLayout>
        </div>
    );
  };
export default DashboardOverview;