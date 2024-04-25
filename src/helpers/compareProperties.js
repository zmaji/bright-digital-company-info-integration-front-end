export const compareProperties = async (currentProperties, propertyFields) => {
  if (!currentProperties || currentProperties.length === 0) {
    console.log('No existing properties. All fields are considered missing.');
    return propertyFields.map((field) => ({
      name: field.name,
      toSave: true,
    }));
  }

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

    return missingFields;
  };
