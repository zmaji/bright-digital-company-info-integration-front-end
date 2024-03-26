import React from 'react';

import StarIcon from '../../icons/star-fill.svg';
import StickerIcon from '../../icons/hubspot-sticker.svg';
import ArrowRight from '../../icons/arrow-right.svg';
import { Link } from 'react-router-dom';

const HubspotSticker = ( ) => {
    return (
      <div className='c-hubspot-sticker'>
        <img className='c-hubspot-sticker__sticker-icon' src={StickerIcon} alt='HubSpot Review Sticker' />

        <div className='c-hubspot-sticker__content'>
            <div className='c-hubspot-sticker__rating u-flex u-flex-v-center'>
                <img className='c-icon c-hubspot-sticker__star-icon' src={StarIcon} alt='Star Icon' />
                <img className='c-icon c-hubspot-sticker__star-icon' src={StarIcon} alt='Star Icon' />
                <img className='c-icon c-hubspot-sticker__star-icon' src={StarIcon} alt='Star Icon' />
                <img className='c-icon c-hubspot-sticker__star-icon' src={StarIcon} alt='Star Icon' />
                <img className='c-icon c-hubspot-sticker__star-icon' src={StarIcon} alt='Star Icon' />
                <span className='c-hubspot-sticker__rating-title'>5/5</span>
            </div>

            <div className='c-hubspot-sticker__button-container'>
                <Link to='https://ecosystem.hubspot.com/marketplace/solutions/bright-digital' className='c-hubspot-sticker__button u-flex u-flex-v-center'>
                    <span className='c-hubspot-sticker__button-title'>
                        Bekijk alle reviews
                    </span>

                    <img className='c-icon c-hubspot-sticker__star-icon' src={ArrowRight} alt='Arrow Right Icon' />
                </Link>
            </div>

        </div>
      </div>
    );
};
  
export default HubspotSticker;