import React from 'react';
import { retrieveIcon } from '../../helpers/retrieveIcon';
import Button from '../elements/Button';

const Card = ({ icon, title, text, button }) => {

    const IconComponent = retrieveIcon(icon);
  
    return (
      <div className="c-card">
        <div className="c-card__content">
          {icon && (
            <IconComponent className={`c-icon c-card-icon`} />
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

          {button && (
            <div className="c-card__content-button">
              <Button {...button} />
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Card;