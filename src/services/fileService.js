import axios from 'axios';

const BASE_URL = process.env.BACK_END_BASE_URL;

const setAuthorizationHeader = (authToken) => {
  if (authToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

const getFiles = async (authToken) => {
  setAuthorizationHeader(authToken);

  try {
    const response = await axios.get(`${BASE_URL}/files/hubspot`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error retrieving files:', error);
    const errorMessage = error.response?.data?.message || error.message || 'An error occurred while retrieving files';
    throw new Error(errorMessage);
  }
};

const createFile = async (authToken, title) => {
  setAuthorizationHeader(authToken);

  const data = {
    title: title
  }

  try {
    const response = await axios.post(`${BASE_URL}/files/hubspot`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error creating file:', error);
    const errorMessage = error.response?.data?.message || error.message || 'An error occurred while creating a file';
    throw new Error(errorMessage);
  }
};

const fileService = {
  createFile,
  getFiles,
};

export default fileService;