export const validateForm = (formData) => {
    let errors = {};

    for (const fieldName in formData) {
        if (!formData[fieldName].trim()) {
            errors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
        }
    }

    if (formData.password && formData.repeatPassword && formData.password !== formData.repeatPassword) {
        errors.repeatPassword = 'Passwords do not match';
    }

    return errors;
};