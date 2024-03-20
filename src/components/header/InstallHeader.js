import React from 'react';
import brightDigitalLogo from '../../images/logo-bright-zw.svg';

const InstallHeader = () => {
    return (
      <div className='c-install-header'>
        <div className="o-container">
          <div className="u-squeeze u-squeeze--xl">
            <div className='c-install-header__container'>
              <div className='c-install-header__logo-container'>
                  <img className="c-install-header__logo" src={brightDigitalLogo} alt="Bright Digital Logo" />
              </div>
            </div>
          </div> 
        </div>
      </div>
    );
  };
  
  export default InstallHeader;