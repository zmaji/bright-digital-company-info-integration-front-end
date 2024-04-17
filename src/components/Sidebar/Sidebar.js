import React from 'react';
import SidebarGroup from './SidebarGroup';

const Sidebar = ({ sidebarData }) => {
    return (
      <div className='c-sidebar'>
        {sidebarData.map((sidebarGroup, index) => (
          <SidebarGroup
            key={index}
            title={sidebarGroup.title}
            items={sidebarGroup.items}
            isLast={sidebarGroup.isLast || false}
            testId={`sidebar-group-${index}`}
          />
        ))}
      </div>
    );
  };
  
  export default Sidebar;