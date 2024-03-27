import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

const BASE_URL='http://localhost:3000/'

const login = async (email, password) => {
  try {
      const response = await axios.post(`${BASE_URL}auth`, {
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
      throw new Error(error.message || 'An error occurred while logging in');
  }
};

const authService = {
    login
};

export default authService;
