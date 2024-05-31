import React, { useEffect } from 'react';
import HubspotSticker from '../Elements/HubspotSticker';
import { Link } from 'react-router-dom';
import ClipPathLogo from '../../macros/ClipPathLogo';

import Button from '../Elements/Button';

const SignupHeader = () => {
    useEffect(() => {
        document.body.classList.add('js-loaded');
    }, []);

    return (
      <div className='c-signup-header'>
        <div className='o-container'>
          <div className='u-squeeze u-squeeze--xl'>
            <div className='c-signup-header__container u-flex u-flex-v-center u-flex-sb'>

                <div className='c-signup-header__return-container u-flex-v-center'>
                  <Button title='Return' style='tertiary' link='/' icon='ArrowLeft' animation='move-left'/>
                </div>

                <div className='c-signup-header__logo-container'>
                    <Link to='/'>
                        <ClipPathLogo cl='c-signup-header__logo c-logo-animation' type='page' />
                    </Link>
                </div>

                <div className='c-signup-header__sticker-container'>
                    <HubspotSticker />
                </div>
            </div>
          </div> 
        </div>
      </div>
    );
  };
  
  export default SignupHeader;