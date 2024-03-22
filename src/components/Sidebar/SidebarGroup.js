import React from 'react';
import SidebarCategory from './SidebarCategory';
import SidebarItem from './SidebarItem';

const SidebarGroup = ({ title, items, isLast }) => {
    return (
        <div className={`c-sidebar__group ${isLast ? 'c-sidebar__group--last' : ''}`}>
            <React.Fragment>
                {title && <SidebarCategory title={title} />}
                    <div className="c-sidebar__items-container">
                        {items.map((item, index) => (
                            <SidebarItem
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                link={item.link}
                            />
                        ))}
                    </div>
            </React.Fragment>
        </div>
    );
};

export default SidebarGroup;
