import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/elements/Button';
import Cards from '../components/content/Cards';
import overviewCardsData from '../data/OverviewCards';
import groupService from '../services/groupService';
import { useSelector } from 'react-redux';
import propertyService from '../services/propertyService';
import { generatePropertyFields } from '../helpers/hubSpot/generatePropertyFields';
import { compareHubSpotProperties } from '../helpers/hubSpot/compareHubSpotProperties';
import { compareProperties } from '../helpers/compareProperties';
import toast from 'react-hot-toast';

const DashboardOverview = () => {
  const authToken = useSelector(state => state.auth.authToken);

  const handleCreateProperties = async () => {
    try {
      const group = groupService.getGroup(authToken, 'company', 'company_info_integration')
  
      if (!group) {
        group = await groupService.createGroup(authToken, 'company', 'company_info_integration');
  
        if (group) {
          toast.success('Successfully created a HubSpot group!');
        } else {
          toast.error('Failed to create a HubSpot group.. contact an admin!');
          return;
        }
      }
  
      const currentHubSpotProperties = await propertyService.getHubSpotProperties(authToken, 'company', 'company_info_integration');
      const currentProperties = await propertyService.getProperties(authToken);

      const propertyFields = await generatePropertyFields();
  
      if (currentHubSpotProperties && currentHubSpotProperties.length > 0 && propertyFields && propertyFields.length > 0) {
        const missingHubSpotProperties = await compareHubSpotProperties(currentHubSpotProperties, propertyFields);
        const missingProperties = await compareProperties(currentProperties, propertyFields);

        if (missingProperties.length > 0) {
          const createdProperties = await propertyService.createProperties(authToken, missingProperties);

          if (createdProperties) {
            toast.success('Successfully created missing properties!');
          } else {
            toast.error('Failed to create missing properties, please contact an admin!');
          }
        }
  
        if (missingHubSpotProperties.length > 0) {
          const createdHubSpotProperties = await propertyService.createHubSpotProperties(authToken, 'company', missingHubSpotProperties);
          if (createdHubSpotProperties) {
            toast.success('Successfully created missing HubSpot properties!');
          } else {
            toast.error('Failed to create missing HubSpot propertiesm, please contact an admin!');
          }
        }

        if (missingHubSpotProperties.length === 0 && missingProperties.length === 0) {
          toast.success('All properties are up to date');
        }
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

                      <Button title='Set up default properties' style='primary' icon='Plus' animation='move-right' onClick={handleCreateProperties} />
                  </div>
                </div>

                <Cards cardData={overviewCardsData} customStyles={['c-cards--flex', 'c-cards--default-margin', 'c-cards--sb']} />
            </DefaultLayout>
        </div>
        
    );
  };
export default DashboardOverview;