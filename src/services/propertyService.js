import axios from 'axios';

const BASE_URL = process.env.BACK_END_BASE_URL;

const setAuthorizationHeader = async (authToken) => {

  if (authToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  }
};

const getHubSpotProperties = async (authToken, objectType, groupName) => {
  await setAuthorizationHeader(authToken);
  
  try {
    const response = await axios.get(`${BASE_URL}/properties/hubspot?objectType=${objectType}&groupName=${groupName}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error:', error);
    throw new Error(error || 'An error occurred while retrieving properties');
  }
};

const createHubSpotProperties = async (authToken, objectType, missingProperties) => {
  await setAuthorizationHeader(authToken);
  
  try {
    const response = await axios.post(`${BASE_URL}/properties/hubspot`, {
      objectType: objectType,
      missingProperties: missingProperties,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    console.error('Error:', error.response);
    throw new Error(error|| 'An error occurred while creating properties');
  }
};

const deleteHubSpotProperties = async (authToken, objectType, propertyName) => {
  try {
    await setAuthorizationHeader(authToken);

    const response = await axios.delete(
      `${BASE_URL}/properties/hubspot/${objectType}/${propertyName}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response;
  } catch (error) {
    const errorMessage = error.response ? error.response.data : 'Unknown error';
    console.error('Error deleting property:', errorMessage);
  }
};

const getProperties = async (authToken) => {
  await setAuthorizationHeader(authToken);
  
  try {
    const response = await axios.get(`${BASE_URL}/properties`, {
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

const createProperties = async (authToken, propertiesToCreate) => {
  await setAuthorizationHeader(authToken);
  
  try {
    const response = await axios.post(`${BASE_URL}/properties`, {
      propertiesToCreate,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    console.error('Error:', error.response);
    throw new Error(error|| 'An error occurred while creating properties');
  }
};

const updateProperties = async (authToken, propertiesToUpdate) => {
  await setAuthorizationHeader(authToken);
  
  try {
    const response = await axios.put(`${BASE_URL}/properties`, {
      propertiesToUpdate,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    console.error('Error:', error.response);
    throw new Error(error|| 'An error occurred while creating properties');
  }
};

const deleteProperty = async (authToken, propertyName) => {
  try {
    await setAuthorizationHeader(authToken);

    const response = await axios.delete(
      `${BASE_URL}/properties/${propertyName}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response;
  } catch (error) {
    const errorMessage = error.response ? error.response.data : 'Unknown error';
    console.error('Error deleting property:', errorMessage);
  }
};

const propertyService = {
  getHubSpotProperties,
  createHubSpotProperties,
  deleteHubSpotProperties,
  getProperties,
  createProperties,
  updateProperties,
  deleteProperty
};

export default propertyService;