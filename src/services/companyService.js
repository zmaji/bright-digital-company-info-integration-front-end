import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const setAuthorizationHeader = async (authToken) => {

  if (authToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  }
};

const getCompanies = async (tradeName) => {
    try {
      const response = await axios.get(`${BASE_URL}/companies`, {
        params: {
          tradeName: tradeName
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error('No company found');
        return null;
      } else {
        console.error('Error:', error);
        throw new Error(error || 'An error occurred while retrieving companies');
      }
    }
  };

const getCompany = async (authToken, objectType, groupName) => {
  await setAuthorizationHeader(authToken);
  
  try {
    const response = await axios.post(`${BASE_URL}/groups`, {
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
    throw new Error(error|| 'An error occurred while creating a group');
  }
};

const companyService = {
  getCompanies,
  getCompany,
};

export default companyService;