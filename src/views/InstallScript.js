import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/elements/Button';
import BreadCrumb from '../components/elements/BreadCrumb';
import Steps from '../components/content/Steps';
import { useSelector } from 'react-redux';
import headerScriptData from '../data/HeaderScript';

const steps = [
  { title: 'Create a HubSpot form' },
  { title: 'Copy style tag' },
  { title: 'You will be redirect to Settings > Content > Pages > Templates' },
  { title: 'Paste tag inside header' }
];

const InstallScript = () => {
    const userData = useSelector(state => state.user.userData.data);

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
                        <Button title='Copy tags' style='tertiary' link={`https://app-eu1.hubspot.com/settings/${userData.hubSpotPortalId}/website/pages/all-domains/page-templates`} newTab='true' icon='Download' animation='move-down' iconStyle='large-margin' onClick={copyHeaderScript}/>
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