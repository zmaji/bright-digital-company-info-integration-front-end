import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { retrieveIcon } from '../../helpers/retrieveIcon';

const Button = ({ style, link, newTab='false', title, icon = '', animation = '', iconStyle = '', customStyle = '', onClick=null}) => {
  const IconComponent = retrieveIcon(icon);
  const target = newTab === 'true' ? '_blank' : null;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link to={link} {...(target && { target })} className={`c-button c-button--${style} c-button--${customStyle}`} onClick={handleClick} data-testid="button-component">
        <div className='c-button__content u-flex u-flex-v-center'>
            {icon && animation === 'move-left' && ( 
              <Suspense fallback={<div>Loading...</div>}>
                <IconComponent className={`c-icon c-button__icon c-button__icon--left c-button__icon--${animation} c-button__icon--${iconStyle}`} />
               </Suspense>
            )}

            <div className='c-button__title'>
                {title}
            </div>

            {icon && animation && animation !== 'move-left' && (
              <Suspense fallback={<div>Loading...</div>}>
                <IconComponent className={`c-icon c-button__icon c-button__icon--${animation} c-button__icon--${iconStyle}`} />
               </Suspense>
            )}
        </div>
    </Link>
  );
};


export default Button;
