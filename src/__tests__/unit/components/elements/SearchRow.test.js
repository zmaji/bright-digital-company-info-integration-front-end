import React from 'react';
import { render } from '@testing-library/react';
import SearchRow from '../../../../components/elements/SearchRow';
import { MemoryRouter } from 'react-router-dom';

describe('SearchRow Component', () => {
  it('renders SearchRow with the correct name, address, location, and button', () => {
    const rowData = {
      name: 'Location A',
      address: '123 Main St.',
      location: 'Cityville',
      button: { title: 'Details', onClick: jest.fn() },
    };

    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <SearchRow {...rowData} />
      </MemoryRouter>
    );

    expect(getByText('Location A')).toBeInTheDocument();
    expect(getByText(/123 Main St\./)).toBeInTheDocument();
    expect(getByText('Cityville')).toBeInTheDocument();

    const buttonElement = getByTestId('button-component');
    expect(buttonElement).toBeInTheDocument();

    const buttonTitle = getByText('Details');
    expect(buttonTitle).toBeInTheDocument();

    buttonElement.click();
    expect(rowData.button.onClick).toHaveBeenCalled();
  });
});