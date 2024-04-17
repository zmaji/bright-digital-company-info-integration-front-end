import React from 'react';
import SidebarCategory from './SidebarCategory';
import SidebarItem from './SidebarItem';

const SidebarGroup = ({ title, items, isLast, testId }) => {
  return (
    <div className={`c-sidebar__group ${isLast ? 'c-sidebar__group--last' : ''}`} data-testid={testId} >
      <React.Fragment>
        {title && <SidebarCategory title={title} />}
        <div className='c-sidebar__items-container'>
          {items.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              title={item.title}
              link={item.link}
              onClick={item.onClick}
              testId={`sidebar-item-${testId}-${index}`}
            />
          ))}
        </div>
      </React.Fragment>
    </div>
  );
};
export default SidebarGroup;
