import React, { useEffect, useState } from 'react';
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
  const authToken = useSelector((state) => state.auth.authToken);
  const [missingProperties, setMissingProperties] = useState([]);
  const [currentProperties, setCurrentProperties] = useState([]);

  const handleCreateProperties = async () => {
    try {
      let group = await groupService.getGroup(authToken, 'company', 'company_info_integration');

      if (!group) {
        group = await groupService.createGroup(authToken, 'company', 'company_info_integration');
        if (group) {
          toast.success('Successfully created a HubSpot group!');
        } else {
          toast.error('Failed to create a HubSpot group. Contact an admin!');
          return;
        }
      }

      const currentHubSpotProperties = await propertyService.getHubSpotProperties(authToken, 'company', 'company_info_integration');

      const propertyFields = await generatePropertyFields();

      if (currentHubSpotProperties && currentHubSpotProperties.length > 0 && propertyFields && propertyFields.length > 0) {
        const missingHubSpotProperties = await compareHubSpotProperties(currentHubSpotProperties, propertyFields);
        
        if (currentProperties && currentProperties.length > 0) {
          const missingProperties = await compareProperties(currentProperties, propertyFields);
          if (missingProperties.length > 0) {
            const createdProperties = await propertyService.createProperties(authToken, missingProperties);

            if (createdProperties) {
              toast.success('Successfully created missing properties!');
            } else {
              toast.error('Failed to create missing properties. Contact an admin!');
            }
          }
        }

        if (missingHubSpotProperties.length > 0) {
          const createdHubSpotProperties = await propertyService.createHubSpotProperties(authToken, 'company', missingHubSpotProperties);
          if (createdHubSpotProperties) {
            toast.success('Successfully created missing HubSpot properties!');
          } else {
            toast.error('Failed to create missing HubSpot properties. Contact an admin!');
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

  const handleResetProperties = async () => {
    const propertyFields = await generatePropertyFields();

    console.log('missingProperties')
    console.log(missingProperties)

    const propertiesToCreate = propertyFields.filter(property => 
      missingProperties.some(missing => missing.name === property.name)
    );

    console.log('propertiesToCreate')
    console.log(propertiesToCreate)

    const createdHubSpotProperties = await propertyService.createHubSpotProperties(authToken, 'company', propertiesToCreate);

    if (createdHubSpotProperties) {
      const propertiesToUpdate = missingProperties.map((property) => ({
        ...property,
        toSave: true,
      }));
      const updatedProperties = await propertyService.updateProperties(authToken, propertiesToUpdate);

      if (updatedProperties) {
        setMissingProperties([]);
        toast.success('Successfully reset default properties');
      } else {
        toast.error('Something went wrong resetting properties, please contact an admin')
      }
    }
  };

  useEffect(() => {
    const checkForMissingProperties = async () => {
      const currentProperties = await propertyService.getProperties(authToken);

      if (currentProperties) {
        const propertiesMissing = await currentProperties.filter((property) => property.toSave === false);
        console.log('propertiesMissing');
        console.log(propertiesMissing);
        setMissingProperties(propertiesMissing);
      }
    };
    checkForMissingProperties();
  }, [authToken]); 

  const buttonText = missingProperties.length > 0 
    ? 'Reset default properties' 
    : 'Set up default properties';

  const buttonAction = missingProperties.length > 0 
    ? handleResetProperties 
    : handleCreateProperties;

  return (
    <div className='v-dashboard-overview'>
      <DefaultLayout padding='default'>
        <div className="v-dashboard-overview__content-wrapper">
          <div className='v-dashboard-overview__content-container u-flex'>
            <h1 className='v-dashboard-overview__content-title'>
              Start retrieving <br /> Bright data
            </h1>

            <p className='v-dashboard-overview__content-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>

            <Button
              title={buttonText}
              style="primary"
              icon="Plus"
              animation="move-right"
              onClick={buttonAction}
            />
          </div>
        </div>

        <Cards cardData={overviewCardsData} customStyles={['c-cards--flex', 'c-cards--default-margin', 'c-cards--sb']} />
      </DefaultLayout>
    </div>
  );
};

export default DashboardOverview;
