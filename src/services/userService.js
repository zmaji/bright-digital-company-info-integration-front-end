import axios from 'axios';
import { setUserData } from '../store/userSlice';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const setAuthorizationHeader = async (authToken) => {

  if (authToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  }
};

const getCurrentUser = async (authToken) => {
  await setAuthorizationHeader(authToken);
  
  try {
      const response = await axios.get(`${BASE_URL}/users`)
      setUserData(response);
      return response;
  } catch (error) {
      console.error('Error:', error);
      throw new Error(error.message || 'An error occurred getting a user');
  }
};

const register = async (firstName, lastName, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, {
      firstName: firstName,
      lastName: lastName,
      emailAddress: email,
      password: password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    console.error('Error:', error);
    throw new Error(error|| 'An error occurred while registering');
  }
};

const updateUser = async (authToken, hubSpotPortalId) => {
  await setAuthorizationHeader(authToken);
  
  try {
    await axios.put(`${BASE_URL}/users`, {
      hubSpotPortalId: hubSpotPortalId,
    });
  } catch (error) {
      console.error('Error:', error);
      throw new Error(error.message || 'An error occurred getting a user');
  }
};

const verifyActivationCode = async (activationCode) => {
  try {
    const response = axios.put(`${BASE_URL}/users/verify`, {
      activationCode: activationCode,
    });

    return response;
  } catch (error) {
      console.error('Error:', error);
      throw new Error(error.message || 'An error occurred verifying a user');
  }
};

const userService = {
  getCurrentUser,
  register,
  updateUser,
  verifyActivationCode,
};

export default userService;