import React from 'react';
import brightDigitalLogo from '../../images/logo-bright-zw.svg';

const Header = () => {
    return (
      <div className='c-header'>
        <div className="o-container">
            <div className="u-squeeze u-squeeze--xl">
               <div className='c-header__container u-flex u-flex-sb u-flex-v-center'>
                <div className='c-header__logo-container'>
                    <img className="c-header__logo" src={brightDigitalLogo} alt="Bright Digital Logo" />
                </div>
                <div className='c-header__profile-container u-flex u-flex-v-center'>
                    <span>John Doe</span>
                    <div className="c-header__profile-circle"></div>
                </div>
            </div>
        </div> 
            </div>
        </div>
     
    );
  };
  
  export default Header;