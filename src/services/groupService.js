import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const setAuthorizationHeader = async (authToken) => {

  if (authToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  }
};

const getGroup = async (authToken, objectType, groupName) => {
  await setAuthorizationHeader(authToken);
    
  try {
    const response = await axios.get(`${BASE_URL}/groups?objectType=${objectType}&groupName=${groupName}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

const createGroup = async (authToken, objectType, groupName) => {
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

const groupService = {
  getGroup,
  createGroup,
};

export default groupService;