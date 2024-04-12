export const validateForm = (formData) => {
    let errors = {};
  
    const fieldNames = {
        firstName: 'First name',
        lastName: 'Last name',
        email: 'Email',
        password: 'Password',
        repeatPassword: 'Repeat password',
    };
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    for (const fieldName in formData) {
        if (!formData[fieldName].trim()) {
            errors[fieldName] = `${fieldNames[fieldName] || (fieldName.charAt(0).toUpperCase() + fieldName.slice(1))} is required`;
        }
    }
  
    if (formData.email && !emailRegex.test(formData.email)) {
        errors.email = 'Invalid email format';
    }
  
    if (formData.password && formData.repeatPassword && formData.password !== formData.repeatPassword) {
        errors.repeatPassword = 'Passwords do not match';
    }
  
    // if (!formData.termsAndConditions) {
    //     errors.termsAndConditions = 'Please accept the terms and conditions';
    // }
  
    return errors;
};
