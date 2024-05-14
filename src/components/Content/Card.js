import React from 'react';
import { retrieveIcon } from '../../helpers/retrieveIcon';
import Button from '../Elements/Button';

const Card = ({ step, icon, title, text, button }) => {

    const IconComponent = retrieveIcon(icon);
  
    return (
      <div className='c-card'>
        <div className='c-card__content'>
          {step && (
            <div className='c-card__content-step'>
                { step }
            </div>
          )}
          
          {icon && (
            <IconComponent className={`c-icon c-card-icon`} data-testid="card-icon" />
          )}

          {title && (
            <div className='c-card__content-title'>
                { title }
            </div>
          )}

          {text && (
            <div className='c-card__content-text'>
            { text }
            </div>
          )}
        </div>
        {button && (
            <div className='c-card__content-button' data-testid="card-button">
              <Button {...button} />
            </div>
          )}
      </div>
    );
  };
  
  export default Card;