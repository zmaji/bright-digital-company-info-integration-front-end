import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import SidebarGroup from '../components/Sidebar/SidebarGroup';
import SidebarItem from '../components/Sidebar/SidebarItem';
import homeIcon from '../icons/auto.svg';

import sidebarData from '../data/defaultSideBar';

const DashboardOverview = () => {
    return (
        <Sidebar>
            <SidebarItem icon={homeIcon} title='Home' />
                {sidebarData.map((sidebarGroup, index) => (
                    <SidebarGroup
                        key={index}
                        title={sidebarGroup.title}
                        items={sidebarGroup.items}
                        link={sidebarGroup.link}
                        isLast={sidebarGroup.isLast || false}
                    />
                ))}
        </Sidebar>
    );
  };

export default DashboardOverview;