import React from 'react';
import { render, screen } from '@testing-library/react';
import SidebarItem from '../../../../components/Sidebar/SidebarItem';
import { MemoryRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux'; 

const mockStore = {
  getState: () => ({}), 
  subscribe: () => {},
  dispatch: () => {},
};


describe('SidebarItem Component', () => {
  it('renders the item title and icon correctly', () => {
    const title = 'Test Item';
    const icon = '/path/to/icon.svg';
    const link = '/test';
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <SidebarItem title={title} icon={icon} link={link} />
        </MemoryRouter>
      </Provider>
    );

    const itemTitle = screen.getByText(title);
    const itemIcon = screen.getByAltText(icon);
    expect(itemTitle).toBeInTheDocument();
    expect(itemIcon).toBeInTheDocument();
  });
});