const removeEmptyStrings = (object) => {
    const cleanedObject = { ...object };
  
    for (const key in cleanedObject) {
      if (cleanedObject.hasOwnProperty(key)) {
        if (cleanedObject[key] === "") {
          delete cleanedObject[key];
        } else if (typeof cleanedObject[key] === "object" && cleanedObject[key] !== null) {
          cleanedObject[key] = removeEmptyStrings(cleanedObject[key]);
        }
      }
    }
  
    return cleanedObject;
  };
  
  export default removeEmptyStrings;
  