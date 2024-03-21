import React from 'react';
import InstallHeader from '../components/header/InstallHeader';
import Button from '../components/elements/Button';
import HubSpotLogo from '../icons/hubspot-logo-v2.svg';
import SyncIcon from '../icons/koppelen.svg';
import CompanyInfoLogo from '../icons/company-info-logo.svg';

const Install = () => {
    return (
        <div className='v-install'>
          <InstallHeader />
          <div className="v-install__background-wrapper">
            <div className='o-container'>
              <div className='u-squeeze u-squeeze--xl'>
                <div className="v-install__content-wrapper">
                  <div className="v-install__content-container u-flex">
                    <div className="v-install__logo-row">
                      <img className="v-install__logo-row__item" src={CompanyInfoLogo} alt="Company info Logo" />
                      <img className="v-install__logo-row__item" src={SyncIcon} alt="Swap icon" />
                      <img className="v-install__logo-row__item" src={HubSpotLogo} alt="HubSpot Logo" />
                    </div>

                    <h2>Title</h2>

                    <p>Discover the possiblities of connecting Company.Info with HubSpot and improve your sales process now!</p>

                    <Button title='Start now' style='primary' link='/overview'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  };

export default Install;