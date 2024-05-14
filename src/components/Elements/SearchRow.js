
import React from 'react';
import Button from '../Elements/Button';

const SearchRow = ({ name, address, location, button }) => {    
  return (
    <div className='c-search-row u-flex'>
      <div className='c-search-row__line'></div>
        <div className='c-search-row__content-container u-flex'>

            <div className="c-search-row__name-container u-flex">
                <div className='c-search-row__name'>{name}</div>
            </div>

            <div className="c-search-row__address-container u-flex">
                <div className='c-search-row__address'>{address}&nbsp;|</div>
                <div className='c-search-row__location'>&nbsp;{location}</div>
            </div>

            <div className='c-search-row__button-container' data-testid="search-row-button">
            <Button
                {...button}
            />
            </div>
     </div>
    </div>
  );
};

export default SearchRow;
