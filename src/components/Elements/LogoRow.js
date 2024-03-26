import React from 'react';

const LogoRow = ({ logos }) => {
  return (
    <div className='c-logo-row'>
      <div className='c-logo-row__container'>
        <div className='c-logo-row__logo-slider'>
          <div className='c-logo-row__logo-wrapper'>
            <div className='c-logo-row__logo-container' data-logos={logos.length}>
              {logos.map((logo, index) => (
                <div className='c-logo-row__logo' key={index}>
                  <img src={logo} alt='Logo' className='c-logo-row__image' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoRow;
