import React, { useEffect } from 'react';
import profileIcon from '../../icons/profile.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ClipPathLogo from '../../macros/ClipPathLogo';

const DefaultHeader = ({ adminLink }) => {
    const userData = useSelector(state => state.user.userData.data);
    let profileLink = '/profile';

    if (adminLink) {
        profileLink = '';
    }

    const firstName = userData ? userData.firstName : 'First name not found';
    const lastName = userData ? userData.lastName : 'Last name not found';

    useEffect(() => {
        document.body.classList.add('js-loaded');
    }, []);

    return (
      <div className='c-default-header'>
        <div className='o-container'>
            <div className='u-squeeze u-squeeze--xxl'>
               <div className='c-default-header__container u-flex u-flex-sb u-flex-v-center'>
                <div className='c-default-header__logo-container'>
                    <Link to={adminLink || '/overview'}>
                        <ClipPathLogo cl='c-default-header__logo c-logo-animation' type='page' />
                    </Link>
                </div>
                <div className='c-default-header__profile-container u-flex u-flex-v-center'>
                    <span className='c-default-header__profile-title'>{firstName} {lastName}</span>

                    <Link to={profileLink}>
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