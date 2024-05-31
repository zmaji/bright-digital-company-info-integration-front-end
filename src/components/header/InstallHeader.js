import React from 'react';
import ClipPathLogo from '../../macros/ClipPathLogo';
import { Link } from 'react-router-dom';

const InstallHeader = () => {
    useEffect(() => {
      document.body.classList.add('js-loaded');
    }, []);

    return (
      <div className='c-install-header'>
        <div className='o-container'>
          <div className='u-squeeze u-squeeze--xl'>
            <div className='c-install-header__container'>
                <div className='c-install-header__logo-container'>
                  <Link to='/'>
                      <ClipPathLogo cl='c-install-header__logo c-logo-animation' type='page' />
                  </Link>
                </div>
            </div>
          </div> 
        </div>
      </div>
    );
  };
  
  export default InstallHeader;