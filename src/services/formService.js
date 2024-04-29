import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const setAuthorizationHeader = (authToken) => {
  if (authToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  } else {
    delete axios.defaults.headers.common['Authorization']; 
  }
};

const createForm = async (authToken, formData) => {
  setAuthorizationHeader(authToken);

  try {
    const response = await axios.post(`${BASE_URL}/forms`, sampleFormData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data; 
  } catch (error) {
    console.error('Error creating form:', error);

    const errorMessage = error.response?.data?.message || error.message || 'An error occurred while creating a form';
    throw new Error(errorMessage); 
  }
};

const sampleFormData = {
    name: "Demo HubSpot Form",
    action: "",
    method: "",
    cssClass: "",
    redirect: "",
    submitText: "Submit",
    followUpId: "",
    notifyRecipients: "",
    leadNurturingCampaignId: "",
  formFieldGroups: [
    {
      default: true,
      isSmartGroup: false,
      fields: [
        {
          name: 'firstname',
          label: 'First Name',
          type: 'string',
          fieldType: 'text',
          displayOrder: 0,
          required: false,
        },
        {
          name: 'lastname',
          label: 'Last Name',
          type: 'string',
          fieldType: 'text',
          displayOrder: 1,
          required: false,
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'string',
          fieldType: 'text',
          displayOrder: 2,
          required: false,
        },
      ],
    },
  ],
};

const formService = {
  createForm,
};

export default formService;
