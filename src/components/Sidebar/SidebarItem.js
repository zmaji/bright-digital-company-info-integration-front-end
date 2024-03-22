import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarItem = ({ title, icon, link }) => {
    const location = useLocation();
    const isActive = location.pathname === link;

    return (
        <Link to={link} className={`c-sidebar__item-container ${isActive ? 'c-sidebar__item-container--active' : ''}`}>
            <img src={icon} alt={`${icon}`} className='c-sidebar__item-icon c-icon'/>
            <span className='c-sidebar__item-title'>{title}</span>
        </Link>
    );
};

export default SidebarItem;
