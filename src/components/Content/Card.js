import React from 'react';
import { retrieveIcon } from '../../helpers/retrieveIcon';

const Card = ({ icon, title, text, button }) => {
    // TODO: deconstruct
    const { buttonText, buttonLink } = button;

    const IconComponent = retrieveIcon(icon);

    return (
      <div className="v-dashboard-overview__card">
        {icon && (
            <Suspense fallback={<div>Loading...</div>}>
                <IconComponent className={`c-icon c-button__icon c-button__icon--${animation}`} />
            </Suspense>
        )}

        <div className='v-dashboard-overview__card-title'>
            {title}
        </div>

        <div className='v-dashboard-overview__card-text'>
            {title}
        </div>

        <Button title='Set up properties' style='primary' link='/' icon='Plus' animation='move-right' />
      </div>
    );
  };
  
  export default Card;