import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const setAuthorizationHeader = async (authToken) => {

  if (authToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  }
};

const getUser = async (authToken) => {
  await setAuthorizationHeader(authToken);
  
  try {
      const response = await axios.get(`${BASE_URL}/users`)
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

const updateUser = async (authToken, updateFields) => {
  await setAuthorizationHeader(authToken);
  
  try {
    await axios.put(`${BASE_URL}/users`, {
      updateFields,
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
  getUser,
  register,
  updateUser,
  verifyActivationCode,
};

export default userService;