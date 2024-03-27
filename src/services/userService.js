import { useSelector } from 'react-redux';
// import dotenv from 'dotenv';
import axios from 'axios';
import { setUserData } from '../store/store';

// dotenv.config();

// const BASE_URL = process.env.BASE_URL;
const BASE_URL='http://localhost:3000/'

const setAuthorizationHeader = async (authToken) => {
  // const authToken = useSelector(state => state.auth.authToken);

  if (authToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  }
};

const getCurrentUser = async (authToken) => {
  await setAuthorizationHeader(authToken);
  
  try {
      const response = await axios.get(`${BASE_URL}users`)
      console.log('response')
      console.log('response')
      console.log('response')
      console.log('response')
      console.log(response)
      setUserData(response);
      return response;
  } catch (error) {
      console.error('Error:', error);
      throw new Error(error.message || 'An error occurred getting a user');
  }
};

const register = async (firstName, lastName, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}users`, {
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
    console.error('Error:', error.response.data);
    throw new Error(error.response.data.error || 'An error occurred while registering');
  }
};

const userService = {
  getCurrentUser,
  register
};

export default userService;