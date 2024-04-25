export const compareHubSpotProperties = async (currentProperties, propertyFields) => {
  const missingFields = propertyFields.filter((propertyField) => {
    return !currentProperties.some((currentProperty) => currentProperty.name === propertyField.name);
  });

  if (missingFields.length === 0) {
    console.log('All HubSpot properties have been created');
    return [];
  } else {
    console.log('The following properties are not yet created..');
    missingFields.forEach((missingField) => {
      console.log(missingField);
    });
    return missingFields;
  }
};