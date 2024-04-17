import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import SidebarGroup from '../../../../components/sidebar/SidebarGroup';
import { Provider } from 'react-redux'; 

const mockStore = {
  getState: () => ({}), 
  subscribe: () => {},
  dispatch: () => {},
};

describe('SidebarGroup Component', () => {
  it('renders the group title and items correctly', () => {
    const title = 'Test Group';
    const items = [
      { title: 'Item 1', icon: '/path/to/icon1.svg', link: '/item1' },
      { title: 'Item 2', icon: '/path/to/icon2.svg', link: '/item2' },
    ];
    render(
      <Provider store={mockStore}>
        <MemoryRouter> 
          <SidebarGroup title={title} items={items} />
        </MemoryRouter>
      </Provider>
    );
    const groupTitle = screen.getByText(title);
    const itemTitles = items.map((item) => screen.getByText(item.title));
    expect(groupTitle).toBeInTheDocument();
    itemTitles.forEach((itemTitle) => {
      expect(itemTitle).toBeInTheDocument();
    });
  });
});
