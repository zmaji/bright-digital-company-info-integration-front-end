import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import Button from '../components/elements/Button';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { generatePropertyFields } from '../helpers/hubSpot/generatePropertyFields';
import propertyService from '../services/propertyService';

const CompanyDetail = () => {
  const authToken = useSelector((state) => state.auth.authToken);
  const [allProperties, setAllProperties] = useState([]);
  const [currentProperties, setCurrentProperties] = useState([]);
  const [selectedProperties, setSelectedProperties] = useState([]); 

  useEffect(() => {
    const fetchPropertyFields = async () => {
      try {
        const properties = await generatePropertyFields();
        setAllProperties(properties);
  
        const currentProperties = await propertyService.getProperties(
          authToken,
          'company',
          'company_info_integration'
        );
        const currentPropertyNames = currentProperties.map((property) => property.name);
        setCurrentProperties(currentPropertyNames);
  
        const matchedProperties = properties.filter((property) =>
          currentPropertyNames.includes(property.name)
        );
  
        const selectedPropertyNames = matchedProperties.map((property) => property.name);
        setSelectedProperties(selectedPropertyNames);
      } catch (error) {
        console.error('Error fetching property fields:', error);
      }
    };
  
    fetchPropertyFields();
  }, [authToken]);

  const formatPropertyLabel = (str) => {
    return str
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
      .join(' ');
  };

  const toggleProperty = (propertyName) => {
    setSelectedProperties((prevSelected) => {
      if (prevSelected.includes(propertyName)) {
        return prevSelected.filter((name) => name !== propertyName);
      } else {
        return [...prevSelected, propertyName];
      }
    });
  };

  const handleSaveProperties = async () => {
    try {
      const propertiesToDelete = allProperties.filter(
        (property) => !selectedProperties.includes(property.name)
      );
  
      const propertiesToCreate = selectedProperties.filter(
        (propertyName) => !currentProperties.includes(propertyName)
      );
  
      if (propertiesToDelete.length > 0) {
        console.log('Properties to delete:', propertiesToDelete);
        // Logic
      }
  
      if (propertiesToCreate.length > 0) {
        console.log('Properties to create:', propertiesToCreate);
        // Logic
      }
  
      if (propertiesToDelete.length === 0 && propertiesToCreate.length === 0) {
        toast.success('No changes needed.');
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra eros dui, et pellentesque est bibendum eget.
            </p>

            <Button
              title="Save selected properties"
              style="primary"
              icon="ArrowRight"
              animation="move-right"
              onClick={handleSaveProperties}
            />
          </div>

          <div className="v-properties__content-container__right u-flex">
            <div className="v-properties__titles-container u-flex">
              <div className="v-properties__hubspot-property-title-container">
                <div className="v-properties__hubspot-properties-title">
                  HubSpot property name
                </div>
                <div className="v-properties__line"></div>
              </div>

              <div className="v-properties__company-info-property-title-container">
                <div className="v-properties__company-info-properties-title">
                  Company.info property name
                </div>
                <div className="v-properties__line"></div>
              </div>
            </div>

            <div className="v-properties__properties-container">
              {allProperties.map((property, index) => (
                <div key={index} className="v-properties__property-pair u-flex u-flex-v-center">
                  <div className="v-properties__hubspot-property u-flex">
                    <input
                      type="checkbox"
                      checked={selectedProperties.includes(property.name)}
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
