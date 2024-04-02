import React from 'react';
import brightDigitalLogo from '../../images/logo-bright-zw.svg';
import profileIcon from '../../icons/profile.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DefaultHeader = () => {
    const userData = useSelector(state => state.auth.userData);

    const firstName = userData ? userData.firstName : 'First name not found';
    const lastName = userData ? userData.lastName : 'Last name not found';

    return (
      <div className='c-default-header'>
        <div className='o-container'>
            <div className='u-squeeze u-squeeze--xxl'>
               <div className='c-default-header__container u-flex u-flex-sb u-flex-v-center'>
                <div className='c-default-header__logo-container'>
                    <Link to="/overview">
                        <img className='c-default-header__logo' src={brightDigitalLogo} alt='Bright Digital Logo' />
                    </Link>
                </div>
                <div className='c-default-header__profile-container u-flex u-flex-v-center'>
                    <span className='c-default-header__profile-title'>{firstName} {lastName}</span>

                    <Link to='/profile'>
                        <img className='c-default-header__profile-icon' src={profileIcon} alt='Profile icon' />
                    </Link>
                </div>
            </div>
        </div> 
            </div>
        </div>
     
    );
  };
  
  export default DefaultHeader;