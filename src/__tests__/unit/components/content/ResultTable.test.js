import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ResultTable from '../../../../components/Content/ResultTable';

describe('ResultTable Component', () => {
  it('renders ResultTable with the correct SearchRow content', () => {
    const resultData = [
      {
        name: 'Location A',
        address: '123 Main St.',
        location: 'Cityville',
        button: { title: 'Details', onClick: jest.fn() }, 
      },
    ];

    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <ResultTable data={resultData} />
      </MemoryRouter>
    );

    expect(getByText('Location A')).toBeInTheDocument();
    expect(getByText(/123 Main St\./)).toBeInTheDocument();
    expect(getByText('Cityville')).toBeInTheDocument();

    const buttonElement = getByTestId('button-component'); 
    expect(buttonElement).toBeInTheDocument();

    expect(getByText('Details')).toBeInTheDocument();
  });
});