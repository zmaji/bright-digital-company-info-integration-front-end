export const compareProperties = async (currentProperties, propertyFields) => {
  if (!currentProperties || currentProperties.length === 0) {
    console.log('No existing properties. All fields are considered missing.');
    return propertyFields.map((field) => ({
      name: field.name,
      toSave: true,
    }));
  }

  // Identify missing fields by checking if they are not in currentProperties
  const missingFields = propertyFields
    .filter(
      (propertyField) =>
        !currentProperties.some(
          (currentProperty) => currentProperty.name === propertyField.name
        )
    )
    .map((field) => ({
      name: field.name,
      toSave: true,
    }));

  // Log the results and return missing fields
  if (missingFields.length === 0) {
    console.log('All properties have been created.');
    return [];
  } else {
    console.log('The following properties are not yet created:');
    missingFields.forEach((missingField) => {
      console.log(missingField.name);
    });
    return missingFields;
  }
};
