export const compareHubSpotProperties = (currentProperties, propertyFields) => {
  const missingFields = propertyFields.filter(
    (propertyField) => !currentProperties.some(
      (currentProperty) => currentProperty.name === propertyField.name
    )
  );

  if (missingFields.length === 0) {
    console.log('All properties are missing');
    return propertyFields;
  } else {
    console.log('The following HubSpot properties are missing...');
    missingFields.forEach((missingField) => {
      console.log(missingField);
    });
    return missingFields;
  }
};
