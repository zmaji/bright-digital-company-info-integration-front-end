import React from 'react';
import brightDigitalLogo from '../../images/logo-bright-zw.svg';
import HubspotSticker from '../elements/HubspotSticker';
import { Link } from 'react-router-dom';

import Button from '../elements/Button';

const SignupHeader = () => {
    return (
      <div className='c-signup-header'>
        <div className="o-container">
          <div className="u-squeeze u-squeeze--xl">
            <div className='c-signup-header__container u-flex u-flex-v-center u-flex-sb'>

                <div className="c-signup-header__return-container u-flex-v-center">
                  <Button title='Return' style='tertiary' link='/' icon='ArrowLeft' animation='move-left'/>
                </div>

                <div className="c-signup-header__logo-container">
                    <Link to="/">
                      <img className="c-signup-header__logo" src={brightDigitalLogo} alt="Bright Digital Logo" />   
                    </Link>
                </div>

                <div className="c-signup-header__sticker-container">
                    <HubspotSticker />
                </div>
            </div>
          </div> 
        </div>
      </div>
    );
  };
  
  export default SignupHeader;