import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ title, icon, link }) => {
    return (
        <Link to={link} className='c-sidebar__item-container'>
            <img src={icon} alt={`${icon}`} className='c-sidebar__item-icon c-icon'/>
            <span className='c-sidebar__item-title'>{title}</span>
        </Link>
    );
};

export default SidebarItem;
