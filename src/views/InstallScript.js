import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/elements/Button';
import BreadCrumb from '../components/elements/BreadCrumb';
import Steps from '../components/content/Steps';
import { useSelector } from 'react-redux';
import headerScriptData from '../data/HeaderScript';
import formService from '../services/formService';
import toast from 'react-hot-toast';

const InstallScript = () => {
    const authToken = useSelector(state => state.auth.authToken);
    const userData = useSelector(state => state.user.userData.data);

    const createForm = async () => {
      console.log("Create form action triggered");
    
      try {
        const hubSpotForms = await formService.getForms(authToken);
    
        const existingForm = hubSpotForms.some(
          (form) => form.name === "Company.info Form"
        );
    
        if (existingForm) {
          toast.success('HubSpot Form has already been created')
        } else {
          const newHubSpotForm = await formService.createForm(authToken);

          if (newHubSpotForm) {
            toast.success('HubSpot Form successfully created!');
          } else {
            toast.error('HubSpot Form could not be created, please contact an admin');
          }
        }
      } catch (error) {
        console.error("Error fetching HubSpot forms:", error);
      }
    };

    const steps = [
      { title: 'Create a HubSpot form', onClick: createForm },
      { title: 'Copy style tags, you will be redirected to your Website Pages' },
      { title: 'Create new website page or choose existing page' },
      { title: 'Select and add the newly created form' },
      { title: 'Go to settings > Advanced > Head HTML' },
      { title: 'Paste tags inside header' }
    ];

    const copyHeaderScript = async () => {
      const headerScript = headerScriptData;
      await navigator.clipboard.writeText(headerScript);
    }

    return (
        <div className='v-install-script'>
            <DefaultLayout>
                <div className="v-install-script__background">
                </div>

                <div className="v-install-script__content-wrapper">
                  <div className="v-install-script__breadcrumb-container">
                    <BreadCrumb />
                  </div>

                  <div className='v-install-script__content-container u-flex'>
                    <div className="v-install-script__content-left">
                        <h1 className='v-install-script__content-title'>
                            Enrich audience
                        </h1>

                        <p className='v-install-script__content-text'>
                        Enrich your target audience by creating a HubSpot form and embedding it on your website. Once set up, this form allows you to gather valuable information from visitors, helping you understand and engage with your audience more effectively.
                        </p>
                        <Button title='Copy tags' style='tertiary' link={`https://app-eu1.hubspot.com/website/${userData.hubSpotPortalId}/pages/site/all`} newTab='true' icon='Download' animation='move-down' iconStyle='large-margin' onClick={copyHeaderScript}/>
                    </div>

                    <div className='v-install-script__content-right'>
                      <h2 className='v-install-script__content-title-secondary'>
                            Steps
                      </h2>

                      <div className="v-install-script__steps">
                        <Steps steps={steps} />
                      </div>
                    </div>
                  </div>
                </div>
            </DefaultLayout>
        </div>
    );
  };
export default InstallScript;