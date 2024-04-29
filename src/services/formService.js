import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const setAuthorizationHeader = (authToken) => {
  if (authToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

const defaultFormData = {
  formType: 'hubspot',
  name: 'Company.info Form',
  createdAt: new Date().toISOString(),
  fieldGroups: [
    {
      groupType: 'default_group',
      fields: [
        {
          name: 'firstname',
          label: 'First name',
          fieldType: 'single_line_text',
          type: 'string',
          required: true,
          objectTypeId: '0-1',
          validation: {
            "blockedEmailDomains": [],
            "useDefaultBlockList": false
          }
        },
        {
          name: 'lastname',
          label: 'Last name',
          fieldType: 'single_line_text',
          type: 'string',
          required: true,
          objectTypeId: '0-1',
          validation: {
            "blockedEmailDomains": [],
            "useDefaultBlockList": false
          }
        },
      ],
    },
    {
      groupType: 'default_group',
      fields: [
        {
          name: 'email',
          label: 'Email Address',
          fieldType: 'email',
          type: 'string',
          required: true,
          objectTypeId: '0-1',
          validation: {
            "blockedEmailDomains": [],
            "useDefaultBlockList": false
          }
        },
        {
          name: 'company',
          label: 'Trade name',
          fieldType: 'single_line_text',
          type: 'string',
          required: true,
          objectTypeId: '0-1',
          validation: {
            "blockedEmailDomains": [],
            "useDefaultBlockList": false
          }
        },
      ],
    },
    {
        groupType: 'default_group',
        fields: [
            {
            name: "dossier_number",
            label: "Test",
            objectTypeId: "0-2",
            fieldType: "number",
            hidden: true,
            validation: {
                minAllowedDigits: 0,
                maxAllowedDigits: 10
            }
        },
        ],
      },
  ],
  configuration: {
    createNewContactForNewEmail: true,
    editable: true,
    allowLinkToResetKnownValues: true,
    postSubmitAction: {
      type: 'thank_you',
      value: 'Thank you for submitting the form!',
    },
    language: 'en',
    prePopulateKnownValues: true,
    cloneable: true,
    notifyContactOwner: true,
    recaptchaEnabled: true,
    archivable: true,
    notifyRecipients: [],
  },
  displayOptions: {
    cssClass: '',
    submitButtonText: 'Submit',
    style: {
      submitAlignment: 'left',
    },
  },
  legalConsentOptions: {
    type: 'none',
  },
};

const createForm = async (authToken) => {
  setAuthorizationHeader(authToken);

  try {
    const response = await axios.post(`${BASE_URL}/forms`, defaultFormData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error creating form:', error);
    const errorMessage = error.response?.data?.message || error.message || 'An error occurred while creating the form';
    throw new Error(errorMessage);
  }
};

const formService = {
  createForm,
};

export default formService;