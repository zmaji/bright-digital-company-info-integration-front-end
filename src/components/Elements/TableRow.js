import React from 'react';
import Button from '../elements/Button'

const TableRow = ({ title, value, button }) => {
    return (
      <div className="c-table-row u-flex">
        <div className="c-table-row__line"></div>
        
        <div className="c-table-row__content-container u-flex">
          {title && ( 
            <div className="c-table-row__title-container">
              <div className="c-table-row__title">
                { title }
              </div>
            </div>
          )}

          {value && ( 
            <div className="c-table-row__title-container">
                <div className="c-table-row__value">
                { value }
                </div>
              </div>
          )}
        </div>

        {button && ( 
          <div className="c-table-row__button-container">
            <Button {...button} />
          </div>
        )}
      </div>
    );
  };
  
  export default TableRow;