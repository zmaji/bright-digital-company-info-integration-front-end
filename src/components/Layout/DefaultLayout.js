import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import SidebarGroup from '../sidebar/SidebarGroup';
import SidebarItem from '../sidebar/SidebarItem';
import sidebarData from '../../data/defaultSideBar';
import ContentContainer from '../content/ContentContainer';
import Header from '../header/Header';
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
