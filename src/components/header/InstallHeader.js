import React from 'react';
import brightDigitalLogo from '../../images/logo-bright-zw.svg';
import { Link } from 'react-router-dom';

const InstallHeader = () => {
    return (
      <div className='c-install-header'>
        <div className="o-container">
          <div className="u-squeeze u-squeeze--xl">
            <div className='c-install-header__container'>
                <div className='c-install-header__logo-container'>
                    <Link to="/">
                      <img className="c-install-header__logo" src={brightDigitalLogo} alt="Bright Digital Logo" />
                    </Link>
                </div>
            </div>
          </div> 
        </div>
      </div>
    );
  };
  
  export default InstallHeader;