import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import adminSidebar from '../../data/adminSideBar';
import ContentContainer from '../Content/ContentContainer';
import DefaultHeader from '../header/DefaultHeader';

const AdminLayout = ({ padding, children }) => {
    return (
        <div className='c-default-layout'>
         <DefaultHeader adminLink='/admin' />
            <div className='o-container'>
                <div className='u-squeeze u-squeeze--xxl'>
                    <div className='c-default-layout__container u-flex'>
                        <div className='c-default-layout__sidebar'>
                            <Sidebar sidebarData={adminSidebar} />
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
export default AdminLayout;
