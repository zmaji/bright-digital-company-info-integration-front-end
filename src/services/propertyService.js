import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const setAuthorizationHeader = async (authToken) => {

  if (authToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  }
};

const getProperties = async (authToken, objectType, groupName) => {
  await setAuthorizationHeader(authToken);
  
  try {
    const response = await axios.get(`${BASE_URL}/properties?objectType=${objectType}&groupName=${groupName}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error(error || 'An error occurred while retrieving properties');
  }
};

const createProperties = async (authToken, objectType, groupName) => {
  await setAuthorizationHeader(authToken);
  
  try {
    const response = await axios.post(`${BASE_URL}/properties`, {
      objectType: objectType,
      groupName: groupName,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    console.error('Error:', error);
    throw new Error(error|| 'An error occurred while creating properties');
  }
};

const propertyService = {
  getProperties,
  createProperties,
};

export default propertyService;