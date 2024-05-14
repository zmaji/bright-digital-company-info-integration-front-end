import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import { MemoryRouter } from 'react-router-dom';
import DefaultHeader from '../../../../components/header/DefaultHeader'; 

const mockUserData = {
  firstName: 'John',
  lastName: 'Doe',
};

const mockStore = {
  getState: () => ({ user: { userData: { data: mockUserData } } }), 
  subscribe: () => {},
  dispatch: () => {},
};

describe('DefaultHeader Component', () => {
  it('renders header with user data and profile icon', () => {
    const { getByText, getByAltText } = render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <DefaultHeader />
        </MemoryRouter>
      </Provider>
    );

    const fullNameElement = getByText('John Doe');
    expect(fullNameElement).toBeInTheDocument();

    const profileIconElement = getByAltText('Profile icon');
    expect(profileIconElement).toBeInTheDocument();
  });
});