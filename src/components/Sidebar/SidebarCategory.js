import React from 'react';

const SidebarCategory = ({ title }) => {
    return (
        <div className='c-sidebar__category'>
            <p className='c-sidebar__category-title'>
                { title }
            </p>
        </div>
    );
};

export default SidebarCategory;