import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import sidebarData from '../../data/defaultSideBar';
import ContentContainer from '../Content/ContentContainer';
import DefaultHeader from '../header/DefaultHeader';

const DefaultLayout = ({ padding, children }) => {
    return (
        <div className='c-default-layout'>
         <DefaultHeader />
            <div className='o-container'>
                <div className='u-squeeze u-squeeze--xxl'>
                    <div className='c-default-layout__container u-flex'>
                        <div className='c-default-layout__sidebar'>
                            <Sidebar sidebarData={sidebarData} />
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
