import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/elements/Button';
import Cards from '../components/content/Cards';
import overviewCardsData from '../data/OverviewCards';
import groupService from '../services/groupService';
import { useSelector } from 'react-redux';
import propertyService from '../services/propertyService';
import { generatePropertyFields } from '../helpers/hubSpot/generatePropertyFields';
import { compareProperties } from '../helpers/hubSpot/compareProperties';

const DashboardOverview = () => {
  const authToken = useSelector(state => state.auth.authToken);

  // TODO: Remove unnecessary debugging logs
  const handleCreateProperties = async () => {
    try {
      let group = await groupService.getGroup(authToken, 'company', 'company_info_integration');
      
      if (!group) {
        console.log('Group does not exist..');
        group = await groupService.createGroup(authToken, 'company', 'company_info_integration');
  
        if (group) {
          console.log('Group created successfully!');
        } else {
          console.log('Failed to create group!');
          return;
        }
      } else {
        console.log('Group exists!');
      }
  
      const currentProperties = await propertyService.getProperties(authToken, 'company', 'company_info_integration');
      const propertyFields = await generatePropertyFields('company_info_integration');
  
      if (currentProperties && currentProperties.length > 0 && propertyFields && propertyFields.length > 0) {
        const missingProperties = await compareProperties(currentProperties, propertyFields);
  
        if (missingProperties.length > 0) {
          console.log('Creating missing properties...');
          const createdProperties = await propertyService.createProperties(authToken, 'company', missingProperties);
          if (createdProperties) {
            console.log('Missing properties created successfully!');
          } else {
            console.log('Failed to create missing properties!');
          }
        } else {
          console.log('All properties are up to date.');
        }
      } else {
        console.log('Failed to fetch properties or generate property fields!');
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