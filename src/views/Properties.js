import React, { useEffect, useState } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import BreadCrumb from '../components/elements/BreadCrumb';
import Button from '../components/elements/Button';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import propertyService from '../services/propertyService';
import groupService from '../services/groupService';
import { generatePropertyFields } from '../helpers/hubSpot/generatePropertyFields';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const CompanyDetail = () => {
  const authToken = useSelector((state) => state.auth.authToken);
  const [allProperties, setAllProperties] = useState([]);
  const [currentProperties, setCurrentProperties] = useState([]);
  const [currentHubSpotProperties, setCurrentHubSpotProperties] = useState([]);
  const [selectedProperties, setSelectedProperties] = useState(new Set());
  const [deleteUnselected, setDeleteUnselected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const customModalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)', // opaque overlay to hide background
      zIndex: 1000, // high z-index to ensure it appears above everything else
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px', // adds rounded corners
      padding: '20px', // internal padding
    },
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProps = await generatePropertyFields();
        setAllProperties(allProps);

        const currentHubSpotProperties = await propertyService.getHubSpotProperties(authToken, 'company', 'company_info_integration');

        if (currentHubSpotProperties) {
          const validCurrentHubSpotProperties = currentHubSpotProperties.filter((property) =>
          allProps.some((ap) => ap.name === property.name)
          );

          setCurrentHubSpotProperties(validCurrentHubSpotProperties);

          const currentProperties = await propertyService.getProperties(authToken);
          
          if (currentProperties) {
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
          }
        } else {
          console.log('test');
        }
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

      const hubSpotPropertiesToDelete = Array.from(currentHubSpotProperties).filter(
        (property) => !selectedProperties.has(property.name)
      );

      const propertiesToCreate = Array.from(currentProperties).filter(
        (property) => 
          selectedProperties.has(property.name) &&
          property.toSave === false 
      );

      if (propertiesToDelete.length > 0 && !deleteUnselected) {
        const propertiesToUpdate = propertiesToDelete.map((property) => ({
          ...property,
          toSave: false,
        }));
        const updatedProperties = await propertyService.updateProperties(authToken, propertiesToUpdate);

        if (updatedProperties) {
          toast.success('Successfully deleted a property mapping');
        } else {
          toast.error('Something went wrong, please contact an admin');
        }
      }

      if (hubSpotPropertiesToDelete.length > 0 && deleteUnselected) {
        const propertiesToUpdate = propertiesToDelete.map((property) => ({
          ...property,
          toSave: false,
        }));
        await propertyService.updateProperties(authToken, propertiesToUpdate);

        const deletionPromises = hubSpotPropertiesToDelete.map(
          (property) => propertyService.deleteHubSpotProperties(authToken, 'company', property.name)
        );

        const deletedProperties = await Promise.all(deletionPromises);

        if (deletedProperties) {
          toast.success('Successfully deleted hubspot properties');
        } else {
          toast.error('Something went wrong, please contact an admin');
        }
      }

      if (propertiesToCreate.length > 0) {
        const propertiesToUpdate = propertiesToCreate.map((property) => ({
          ...property,
          toSave: true,
        }));

        await propertyService.updateProperties(authToken, propertiesToUpdate);

        const matchingProperties = allProperties.filter((allProperty) =>
          propertiesToCreate.some((createProperty) => createProperty.name === allProperty.name)
        );

        await propertyService.createHubSpotProperties(authToken, 'company', matchingProperties);
      }

      if (propertiesToDelete.length === 0 && propertiesToCreate.length === 0) {
        toast.success('All properties are up-to-date');
      }
    } catch (error) {
      console.error('Error processing properties:', error);
      toast.error('Failed to process properties, please contact an admin');
    }
  };

  const handleModalConfirm = () => {
    setDeleteUnselected(true);
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleDeleteUnselectedChange = (e) => {
    if (e.target.checked) {
      setIsModalOpen(true); 
    } else {
      setDeleteUnselected(false);
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
              Choose which properties will be saved to HubSpot when manually retrieving data. You can select or deselect the properties as needed. Be aware that when the checkbox below is selected, it will permanently delete that property from HubSpot, including any existing values associated with it. This action is irreversible, so please ensure you have made the correct selection before proceeding.
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
                  onChange={handleDeleteUnselectedChange} 
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

        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleModalCancel}
          style={customModalStyles}
          contentLabel="Confirm Deletion">

          <p>Are you sure you want to delete these properties?</p>
          <div className="c-properties-modal__button-container u-flex u-flex-v-center">
            <div className="c-properties-modal__button-confirm">
              <Button
                title="Confirm"
                style="primary"
                icon="Plus"
                animation='none'
                onClick={handleModalConfirm}
              />
            </div>
            <div className="c-properties-modal__button-cancel">
              <Button
                title="Cancel"
                style="secondary"
                icon="Plus"
                animation='none'
                onClick={handleModalCancel}
              />
              </div>
          </div>
        </Modal>
      </div>
    </DefaultLayout>
  );
};

export default CompanyDetail;
