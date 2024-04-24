import React, { useEffect, useState } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import Button from '../components/elements/Button';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import propertyService from '../services/propertyService';
import groupService from '../services/groupService';
import { generatePropertyFields } from '../helpers/hubSpot/generatePropertyFields';

const CompanyDetail = () => {
  const authToken = useSelector((state) => state.auth.authToken);
  const [allProperties, setAllProperties] = useState([]);
  const [currentProperties, setCurrentProperties] = useState([]);
  const [currentHubSpotProperties, setCurrentHubSpotProperties] = useState([]);
  const [selectedProperties, setSelectedProperties] = useState(new Set());
  const [deleteUnselected, setDeleteUnselected] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProps = await generatePropertyFields();
        setAllProperties(allProps);

        const currentHubSpotProperties = await propertyService.getHubSpotProperties(authToken, 'company', 'company_info_integration');

        const validCurrentHubSpotProperties = currentHubSpotProperties.filter((property) =>
        allProps.some((ap) => ap.name === property.name)
        );

        setCurrentHubSpotProperties(validCurrentHubSpotProperties);

        const currentProperties = await propertyService.getProperties(authToken);
        
        const validCurrentProperties = currentProperties.filter((property) =>
          allProps.some((ap) => ap.name === property.name)
        );

        setCurrentProperties(validCurrentProperties);

        const initialSelectedProperties = new Set(
          validCurrentProperties
            .filter((property) => property.toSave)
            .map((property) => property.name)
        );
        
        setSelectedProperties(initialSelectedProperties);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to fetch data. Please try again.');
      }
    };

    fetchData();
  }, [authToken]);

  const toggleProperty = (propertyName) => {
    setSelectedProperties((prevSelected) => {
      const updatedSelected = new Set(prevSelected);
      if (updatedSelected.has(propertyName)) {
        updatedSelected.delete(propertyName);
      } else {
        updatedSelected.add(propertyName);
      }
      return updatedSelected;
    });
  };

  const formatPropertyLabel = (str) => {
    return str
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const handleSaveProperties = async () => {
    try {
      let group = await groupService.getGroup(authToken, 'company', 'company_info_integration');

      if (!group) {
        group = await groupService.createGroup(authToken, 'company', 'company_info_integration');
        if (!group) {
          toast.error('No property group could be created, please contact an admin');
          return;
        }
      }

      const propertiesToDelete = Array.from(currentProperties).filter(
        (property) => !selectedProperties.has(property.name)
      );

      const HubSpotPropertiesToDelete = Array.from(currentHubSpotProperties).filter(
        (property) => !selectedProperties.has(property.name)
      );

      const propertiesToCreate = Array.from(allProperties).filter(
        (property) => selectedProperties.has(property.name) &&
          !currentProperties.some((cp) => cp.name === property.name)
      );

      // if (deleteUnselected) {
      //   for (const property of propertiesToDelete) {
      //     await propertyService.deleteHubSpotProperties(authToken, 'company', property.name);
      //     toast.success('Successfully deleted properties');

      // }

      console.log(propertiesToDelete);

      if (propertiesToDelete.length > 0 && !deleteUnselected) {
        const propertiesToUpdate = propertiesToDelete.map((property) => ({
          ...property,
          toSave: false,
        }));
        await propertyService.updateProperties(authToken, propertiesToUpdate);
      }

      if (HubSpotPropertiesToDelete.length > 0 && deleteUnselected) {
        const propertiesToUpdate = propertiesToDelete.map((property) => ({
          ...property,
          toSave: false,
        }));
        await propertyService.updateProperties(authToken, propertiesToUpdate);
        
        for (const property of HubSpotPropertiesToDelete) {
          await propertyService.deleteHubSpotProperties(authToken, 'company', property.name);
        }  
      }

      // if (propertiesToCreate.length > 0) {
      //   await propertyService.createHubSpotProperties(authToken, 'company', propertiesToCreate);
      //   toast.success('Successfully created new properties');
      // }

      if (propertiesToDelete.length === 0 && propertiesToCreate.length === 0) {
        toast.success('All properties are up-to-date');
      }
    } catch (error) {
      console.error('Error processing properties:', error);
      toast.error('Failed to process properties, please contact an admin');
    }
  };

  return (
    <DefaultLayout>
      <div className="v-properties__content-wrapper">
        <div className="v-properties__breadcrumb-container u-flex">
          <BreadCrumb />
        </div>

        <div className="v-properties__content-container u-flex">
          <div className="v-properties__content-container__left">
            <h2 className="v-properties__title">Select properties</h2>
            <p className="v-properties__text">
              Select the properties that you would like to create and/or delete.
            </p>

            <Button
              title="Save selected settings"
              style="primary"
              icon="Plus"
              animation="move-right"
              onClick={handleSaveProperties}
            />

            <div className="v-properties__delete-unselected-container u-flex u-flex-v-cent">
              <div className="v-properties__delete-unselected-checkbox">
                <input
                  type="checkbox"
                  id="delete-unselected"
                  checked={deleteUnselected}
                  onChange={(e) => setDeleteUnselected(e.target.checked)} 
                />
              </div>

              <div className="v-properties__delete-unselected-title">
                  Delete unselected properties
              </div>
            </div>
          </div>

          <div className="v-properties__content-container__right u-flex">
            <div className="v-properties__titles-container u-flex">
              <div className="v-properties__hubspot-property-title-container">
                <div className="v-properties__hubspot-properties-title">HubSpot property name</div>
                <div class="v-properties__line"></div>
              </div>

              <div className="v-properties__company-info-property-title-container">
                <div class="v-properties__company-info-properties-title">Company.info property name</div>
                <div class="v-properties__line"></div>
              </div>
            </div>

            <div className="v-properties__properties-container">
              {allProperties.map((property, index) => (
                <div key={`${property.name}_${index}`} className="v-properties__property-pair u-flex u-flex-v-center">
                  <div className="v-properties__hubspot-property u-flex">
                    <input
                      type="checkbox"
                      checked={selectedProperties.has(property.name)}
                      onChange={() => toggleProperty(property.name)}
                    />
                    <div className="v-properties__hubspot-property-label">
                      {formatPropertyLabel(property.name)}
                    </div>
                  </div>

                  <div className="v-properties__company-info-property u-flex u-flex-v-center">
                    <div className="v-properties__company-info-label">
                      {formatPropertyLabel(property.label)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CompanyDetail;
