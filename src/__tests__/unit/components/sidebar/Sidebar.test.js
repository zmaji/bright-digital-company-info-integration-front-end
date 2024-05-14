import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Sidebar from '../../../../components/Sidebar/Sidebar';
import SidebarGroup from '../../../../components/Sidebar/SidebarGroup';
import sidebarData from '../../../../data/DefaultSideBar';

const mockStore = {
  getState: () => ({}),
  subscribe: () => {},
  dispatch: () => {}
};

describe('Sidebar Component', () => {
  it('renders SidebarGroup for each sidebarData item', () => {
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Sidebar sidebarData={sidebarData} />
        </MemoryRouter>
      </Provider>
    );

    sidebarData.forEach((group, index) => {
        const sidebarGroup = screen.getByTestId(`sidebar-group-${index}`);
        expect(sidebarGroup).toBeInTheDocument();
        if (group.title) {
          expect(sidebarGroup).toHaveTextContent(group.title);
        }
    });
  });

  it('passes correct props to SidebarGroup', () => {
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Sidebar sidebarData={sidebarData} />
        </MemoryRouter>
      </Provider>
    );

    sidebarData.forEach((group, groupIndex) => {
      group.items.forEach((item, itemIndex) => {
        const sidebarItem = screen.getByTestId(`sidebar-item-sidebar-group-${groupIndex}-${itemIndex}`);
        expect(sidebarItem).toBeInTheDocument();
        expect(sidebarItem).toHaveTextContent(item.title);
      });
    });
  });
});
