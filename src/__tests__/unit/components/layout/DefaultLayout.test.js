import React from 'react';
import { render, screen } from '@testing-library/react';
import DefaultLayout from '../../../../components/layout/DefaultLayout';
import { Provider } from 'react-redux'; 
import { MemoryRouter } from 'react-router-dom';

const mockUserData = {
  firstName: 'John',
  lastName: 'Doe',
};

const mockStore = {
  getState: () => ({ user: { userData: { data: mockUserData } } }), 
  subscribe: () => {},
  dispatch: () => {},
};

describe('DefaultLayout Component', () => {
  it('renders the DefaultHeader component', () => {
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <DefaultLayout />
        </MemoryRouter>
      </Provider>
    );
    const defaultHeader = document.querySelector('.c-default-header');
    expect(defaultHeader).toBeInTheDocument();
  });

  it('renders the Sidebar component with sidebarData prop', () => {
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <DefaultLayout />
        </MemoryRouter>
      </Provider>
    );
    const sidebar = document.querySelector('.c-sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  it('renders the ContentContainer component with children', () => {
    const mockChild = <div>Mock child content</div>;
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <DefaultLayout>{mockChild}</DefaultLayout>
        </MemoryRouter>
      </Provider>
    );
    const contentContainer = document.querySelector('.c-default-layout__content-container');
    expect(contentContainer).toBeInTheDocument();
    expect(screen.getByText('Mock child content')).toBeInTheDocument();
  });
});
