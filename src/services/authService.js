import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const login = async (email, password) => {
  try {
      const response = await axios.post(`${BASE_URL}/auth`, {
          emailAddress: email,
          password: password,
      }, {
          headers: {
              'Content-Type': 'application/json',
          },
      });
      return response;
  } catch (error) {
      console.error('AxiosResponse:', error);
      return error.response;
  }
};

const authService = {
    login
};

export default authService;