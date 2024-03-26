const login = async (email, password) => {
    try {
        return await fetch('http://localhost:3000/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailAddress: email,
                password: password,
            }),
        });
    } catch (error) {
        console.error('Error:', error);
        throw new Error(error.message || 'An error occurred while logging in');
    }
};

const authService = {
    login
  };

export default authService;