import React from 'react';
import SignupHeader from '../components/header/SignupHeader';
import Button from '../components/elements/Button';
import HubSpotLogo from '../icons/hubspot-logo-v2.svg';
import SyncIcon from '../icons/sync.svg';
import CompanyInfoLogo from '../icons/company-info-logo.svg';
import { useLocation, useNavigate } from 'react-router';
import userService from '../services/userService';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../store/store';

const ThankYou = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const hubSpotPortalId = searchParams.get('hubSpotPortalId');
    const navigate = useNavigate();

    const updateUser = async () => {
        try {
            const authToken = localStorage.getItem('authToken');
            await userService.updateUser(authToken, hubSpotPortalId);
            dispatch(setAuthToken(authToken));
            localStorage.removeItem('authToken');
            navigate('/overview');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className='v-thank-you'>
          <SignupHeader />
          <div className="v-thank-you__background-wrapper">
            <div className='o-container'>
              <div className='u-squeeze u-squeeze--xl'>
                <div className="v-thank-you__content-wrapper">
                  <div className="v-thank-you__content-container u-flex">
                    <div className="v-thank-you__logo-row u-flex u-flex-v-center">
                      <img className="v-thank-you__logo-row__logo" src={CompanyInfoLogo} alt="Company info Logo" />
                      <img className="v-thank-you__logo-row__icon" src={SyncIcon} alt="Swap icon" />
                      <img className="v-thank-you__logo-row__logo" src={HubSpotLogo} alt="HubSpot Logo" />
                    </div>

                    <h1 className='v-thank-you__content-title'>Thank you!</h1>

                    <p className='v-thank-you__content-text'>Lorem ipsum dolor sit amet, consectetur adipiscing. Ut enim ad minim veniam</p>

                    <Button title='Continue' style='primary' onClick={updateUser} link='/overview' icon='ArrowRight' animation='move-right' variable={hubSpotPortalId}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  };

export default ThankYou;