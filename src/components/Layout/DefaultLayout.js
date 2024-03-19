import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SidebarGroup from '../Sidebar/SidebarGroup';
import SidebarItem from '../Sidebar/SidebarItem';
import sidebarData from '../../data/DefaultSidebar';
import ContentContainer from '../Content/ContentContainer';
import Header from '../Header/Header';
import carIcon from '../../icons/auto.svg';

const DefaultLayout = ({ children }) => {
    return (
        <div className='c-default-layout'>
         <Header />
            <div className='o-container'>
                <div className='u-squeeze u-squeeze--l'>
                    <div className='c-default-layout__container u-flex'>
                        <div className='c-default-layout__sidebar'>
                            <Sidebar>
                                <SidebarItem icon={carIcon} title='Home' />
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
                        </div>
                        <ContentContainer>
                            { children }
                        </ContentContainer>
                    </div>
                </div>
            </div>
        </div>
    );
  };
export default DefaultLayout;
