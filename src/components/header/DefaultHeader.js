import React from 'react';
import brightDigitalLogo from '../../images/logo-bright-zw.svg';
import { Link } from 'react-router-dom';

const DefaultHeader = () => {
    return (
      <div className='c-default-header'>
        <div className='o-container'>
            <div className='u-squeeze u-squeeze--xxl'>
               <div className='c-default-header__container u-flex u-flex-sb u-flex-v-center'>
                <div className='c-default-header__logo-container'>
                    <Link to="/">
                        <img className='c-default-header__logo' src={brightDigitalLogo} alt='Bright Digital Logo' />
                    </Link>
                </div>
                <div className='c-default-header__profile-container u-flex u-flex-v-center'>
                    <span className='c-default-header__profile-title'>John Doe</span>

                    <Link to='/profile'>
                        <div className='c-default-header__profile-circle'></div>
                    </Link>
                </div>
            </div>
        </div> 
            </div>
        </div>
     
    );
  };
  
  export default DefaultHeader;