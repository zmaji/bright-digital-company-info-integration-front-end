import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useLogout from '../../store/handleLogout';
import toast from 'react-hot-toast';

const SidebarItem = ({ title, icon, link, onClick, testId }) => {
  const location = useLocation();
  const isActive = location.pathname === link;
  const logout = useLogout();

  const handleClick = () => {
    if (onClick === 'logout') {
      toast.success('Successfully logged out!');
      logout();
    }
  };

  return (
    <Link
      to={link}
      className={`c-sidebar__item-container ${isActive ? 'c-sidebar__item-container--active' : ''}`}
      data-testid={testId}
      onClick={handleClick}
    >
      <img src={icon} alt={`${icon}`} className='c-sidebar__item-icon c-icon' />
      <span className='c-sidebar__item-title'>{title}</span>
    </Link>
  );
};

export default SidebarItem;
