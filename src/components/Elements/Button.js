import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { retrieveIcon } from '../../helpers/retrieveIcon';

const Button = ({ style, link, title, icon = '', animation = '', customStyle ='' }) => {
  const IconComponent = retrieveIcon(icon);

  return (
    <Link to={link} className={`c-button c-button--${style}`}>
        <div className='c-button__content u-flex u-flex-v-center'>
            {icon && animation === "move-left" && ( 
              <Suspense fallback={<div>Loading...</div>}>
                <IconComponent className={`c-icon c-button__icon c-button__icon--left c-button__icon--${animation} c-button__icon--${customStyle}`} />
               </Suspense>
            )}

            <div className='c-button__title'>
                {title}
            </div>

            {icon && animation && animation !== "move-left" && (
              <Suspense fallback={<div>Loading...</div>}>
                <IconComponent className={`c-icon c-button__icon c-button__icon--${animation} c-button__icon--${customStyle}`} />
               </Suspense>
            )}
        </div>
    </Link>
  );
};


export default Button;
