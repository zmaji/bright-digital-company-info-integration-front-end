import React from 'react';
import SignupHeader from '../components/header/SignupHeader';
import Button from '../components/elements/Button';
import HubSpotLogo from '../icons/hubspot-logo-v2.svg';
import SyncIcon from '../icons/sync.svg';
import CompanyInfoLogo from '../icons/company-info-logo.svg';

const Install = () => {
    return (
        <div className='v-install'>
          <SignupHeader />
          <div className="v-install__background-wrapper">
            <div className='o-container'>
              <div className='u-squeeze u-squeeze--xl'>
                <div className="v-install__content-wrapper">
                  <div className="v-install__content-container u-flex">
                    <div className="v-install__logo-row u-flex u-flex-v-center">
                      <img className="v-install__logo-row__logo" src={CompanyInfoLogo} alt="Company info Logo" />
                      <img className="v-install__logo-row__icon" src={SyncIcon} alt="Swap icon" />
                      <img className="v-install__logo-row__logo" src={HubSpotLogo} alt="HubSpot Logo" />
                    </div>

                    <h1 className='v-install__content-title'>Install the app</h1>

                    <p className='v-install__content-text'>Discover the possiblities of connecting Company.Info with HubSpot and improve your sales process now!</p>

                    <Button title='Start now' style='primary' link='/overview' icon='ArrowRight' animation='move-right'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  };

export default Install;