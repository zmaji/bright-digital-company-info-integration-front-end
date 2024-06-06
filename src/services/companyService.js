import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};

const setAuthorizationHeader = async (authToken) => {

  if (authToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  }
};

const getCompanies = async (tradeName, authToken) => {
  await setAuthorizationHeader(authToken);

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
      if (error.response && error.response.status === 404 || error.response.status === 500) {
        console.error('No company found');
        return null;
      } else {
        console.error('Error:', error);
        throw new Error(error || 'An error occurred while retrieving companies');
      }
    }
  };

  const getHubSpotCompanies = async (authToken) => {
    await setAuthorizationHeader(authToken);

    try {
      const response = await axios.get(`${BASE_URL}/companies/hubspot`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);
  
      return response.data.results;
    } catch (error) {
      if (error.response && error.response.status === 404 || error.response.status === 500) {
        console.error('No companies found');
        return null;
      } else {
        console.error('Error:', error);
        throw new Error(error || 'An error occurred while retrieving companies');
      }
    }
  };

  const updateHubSpotCompany = async (authToken, companyId, companyData) => {
    await setAuthorizationHeader(authToken);

    const syncDate = new Date();
    const formattedDate = formatDate(syncDate);

    companyData = { ...companyData, last_sync: formattedDate}

    try {
      const response = await axios.put(`${BASE_URL}/companies/hubspot`, {
        companyId: companyId,
        companyData: companyData,
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404 || error.response.status === 500) {
        console.error(`Could not update company with id ${companyId}`);
        return null;
      } else {
        console.error('Error:', error);
        throw new Error(error || `An error occurred while retrieving a company with id ${companyId}`);
      }
    }
  };

  const createHubSpotCompany = async (authToken, companyData) => {
    await setAuthorizationHeader(authToken);

    const syncDate = new Date();
    const formattedDate = formatDate(syncDate);

    companyData = { ...companyData, last_sync: formattedDate}
    
    try {
      const response = await axios.post(`${BASE_URL}/companies/hubspot`, {
        companyData: companyData,
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

  const getCompany = async (dossierNumber, establishmentNumber, authToken) => {
    await setAuthorizationHeader(authToken);
    
    try {
      const response = await axios.get(`${BASE_URL}/companies/info`, {
        params: {
          dossierNumber: dossierNumber,
          establishmentNumber: establishmentNumber
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404 || error.response.status === 500) {
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
  getHubSpotCompanies,
  updateHubSpotCompany,
  createHubSpotCompany,
};

export default companyService;