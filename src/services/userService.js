const register = async (firstName, lastName, email, password) => {
  try {
      return await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              emailAddress: email,
              password: password,
          }),
      });
  } catch (error) {
      console.error('Error:', error);
      throw new Error(error.message || 'An error occurred while registering');
  }
};

const userService = {
  register
};

export default userService;