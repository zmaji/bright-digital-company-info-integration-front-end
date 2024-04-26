import React, { useEffect, useState } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/elements/Button';
import Cards from '../components/content/Cards';
import overviewCardsData from '../data/OverviewCards';
import groupService from '../services/groupService';
import { useSelector } from 'react-redux';
import propertyService from '../services/propertyService';
import { generatePropertyFields } from '../helpers/hubSpot/generatePropertyFields';
import toast from 'react-hot-toast';

const DashboardOverview = () => {
  const authToken = useSelector((state) => state.auth.authToken);
  const [missingHubSpotProperties, setMissingHubSpotProperties] = useState([]);
  const [missingProperties, setMissingProperties] = useState([]);
  const [propertiesToUpdate, setPropertiesToUpdate] = useState([]);
  const [propertyFields, setPropertyfields] = useState([]);

  const updateProperties = async () => {
    try {
      let group = await groupService.getGroup(authToken, 'company', 'company_info_integration');
      if (!group) {
        group = await groupService.createGroup(authToken, 'company', 'company_info_integration');
        if (!group) {
          toast.error('Failed to create a HubSpot group. Contact an admin!');
          return;
        }
      }

      if (missingHubSpotProperties.length > 0) {
        await propertyService.createHubSpotProperties(authToken, 'company', missingHubSpotProperties);
      }

      if (missingProperties.length > 0) {
        await propertyService.createProperties(authToken, missingProperties);
      } else {
        await propertyService.updateProperties(authToken, propertiesToUpdate)
      }

      setMissingProperties(missingProperties);
      toast.success('Successfully updated all properties!');
    } catch (error) {
      console.error('Error setting up properties:', error);
      toast.error('Failed to set up properties. Contact an admin.');
    }
  };

  useEffect(() => {
    const checkForMissingProperties = async () => {
      const currentProperties = await propertyService.getProperties(authToken);
      const currentHubSpotProperties = await propertyService.getHubSpotProperties(authToken, 'company', 'company_info_integration');
      const propertyFields = await generatePropertyFields();

      setPropertyfields(propertyFields);

      if (currentProperties !== null) {
        const propertiesToUpdate = currentProperties
        .filter((property) => property.toSave === false)
        .map((property) => ({
          ...property,
          toSave: true,
        }));
        setPropertiesToUpdate(propertiesToUpdate);
      } else {
        const missingProperties = propertyFields.map((property) => ({
          name: property.name,
          toSave: true,
        }));
        setMissingProperties(missingProperties);
      }

      if (currentHubSpotProperties) {
        const missingHubSpotProperties = propertyFields.filter(
          (field) => !currentHubSpotProperties.some((cp) => cp.name === field.name)
        );
        setMissingHubSpotProperties(missingHubSpotProperties);
      };
    };
    checkForMissingProperties();
  }, [authToken]);

  const buttonText = missingProperties.length === propertyFields.length
    ? 'Set up properties' 
    : 'Reset properties';

  const paragraphText = missingProperties.length === propertyFields.length
    ? 'By clicking the button below, a default HubSpot group and the necessary properties will be automatically created. This serves as the central hub for all your the retrieved data in HubSpot and ensures that it is accurately organized and ready for further operations.' 
    : 'By clicking the button below, all the necessary properties will be automatically reset to default.';

  const buttonIcon = missingProperties.length === propertyFields.length
    ? 'Plus' 
    : 'Refresh';
    
  return (
    <div className='v-dashboard-overview'>
      <DefaultLayout padding='default'>
        <div className="v-dashboard-overview__content-wrapper">
          <div className='v-dashboard-overview__content-container u-flex'>
            <h1 className='v-dashboard-overview__content-title'>
              Start retrieving <br /> Bright data
            </h1>

            <p className='v-dashboard-overview__content-text'>
              {paragraphText}
            </p>

            <Button
              title={buttonText}
              style="primary"
              icon={buttonIcon}
              animation="move-right"
              onClick={updateProperties}
            />
          </div>
          
          <Cards cardData={overviewCardsData} customStyles={['c-cards--flex', 'c-cards--default-margin', 'c-cards--sb']} />
        </div>
      </DefaultLayout>
    </div>
  );
};

export default DashboardOverview;
