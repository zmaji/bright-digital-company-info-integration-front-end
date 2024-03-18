import React from 'react';
import SidebarCategory from './SidebarCategory';
import SidebarItem from './SidebarItem';

const SidebarGroup = ({ title, items, isLast, link }) => {
    return (
        <div className={`c-sidebar__group ${isLast ? 'c-sidebar__group--last' : ''}`}>
            <React.Fragment>
                {title && <SidebarCategory title={title} />}
                    {items.map((item, index) => (
                        <SidebarItem
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            link={item.link}
                        />
                    ))}
            </React.Fragment>
        </div>
    );
};

export default SidebarGroup;
