import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import SidebarGroup from '../sidebar/SidebarGroup';
import sidebarData from '../../data/DefaultSidebar';
import ContentContainer from '../content/ContentContainer';
import DefaultHeader from '../header/DefaultHeader';

const DefaultLayout = ({ padding, children }) => {
    return (
        <div className='c-default-layout'>
         <DefaultHeader />
            <div className='o-container'>
                <div className='u-squeeze u-squeeze--xxl'>
                    <div className='c-default-layout__container u-flex'>
                        <div className='c-default-layout__sidebar'>
                            <Sidebar>
                                {sidebarData.map((sidebarGroup, index) => (
                                    <SidebarGroup
                                        key={index}
                                        title={sidebarGroup.title}
                                        items={sidebarGroup.items}
                                        isLast={sidebarGroup.isLast || false}
                                    />
                                ))}
                            </Sidebar>
                        </div>
                        <ContentContainer padding={padding}>
                            { children }
                        </ContentContainer>
                    </div>
                </div>
            </div>
        </div>
    );
  };
export default DefaultLayout;
