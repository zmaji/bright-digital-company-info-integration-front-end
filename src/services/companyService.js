import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const setAuthorizationHeader = async (authToken) => {

  if (authToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  }
};

const getCompanies = async (tradeName) => {
    try {
      const response = await axios.get(`${BASE_URL}/companies/`, {
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

  const getCompany = async (dossierNumber) => {
    try {
      const response = await axios.get(`${BASE_URL}/companies/info`, {
        params: {
          dossierNumber: dossierNumber
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error('No company info found');
        return null;
      } else {
        console.error('Error:', error);
        throw new Error(error || 'An error occurred while retrieving a company');
      }
    }
  };

const companyService = {
  getCompanies,
  getCompany,
};

export default companyService;