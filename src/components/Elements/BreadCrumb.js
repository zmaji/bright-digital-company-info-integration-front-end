import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ChevronRightGrey from '../../icons/chevron-right-gray.svg';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const BreadCrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(path => path !== '');
    const totalPaths = paths.length;

    return (
        <div className='c-breadcrumb__container u-flex u-flex-v-center'>
            <Link className='c-breadcrumb__item c-breadcrumb__item--home' to='/overview'>Home</Link>

            {paths.map((path, index) => (
                <React.Fragment key={index}>
                    <img className='c-breadcrumb__separator-icon' src={ChevronRightGrey} alt='Chevron right icon' data-testid="breadcrumb-icon"/>

                    <Link
                        className={`c-breadcrumb__item ${index === totalPaths - 1 ? 'c-breadcrumb__item--bold' : ''}`}
                        to={`/${paths.slice(0, index + 1).join('/')}`}
                    >
                        {capitalizeFirstLetter(path.replace(/-/g, ' '))}
                    </Link>
                </React.Fragment>
            ))}
        </div>
    );
};
    
export default BreadCrumb;
