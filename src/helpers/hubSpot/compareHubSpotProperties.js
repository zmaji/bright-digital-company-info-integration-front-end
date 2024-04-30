export const compareHubSpotProperties = (currentProperties, propertyFields) => {
  const missingFields = propertyFields.filter(
    (propertyField) => !currentProperties.some(
      (currentProperty) => currentProperty.name === propertyField.name
    )
  );

  if (missingFields.length === 0) {
    return propertyFields;
  } else {
    return missingFields;
  }
};
