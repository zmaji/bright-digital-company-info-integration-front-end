import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Table from '../../../../components/Content/Table';

describe('Table Component', () => {
  it('renders table with given data', () => {
    const tableData = [
      { title: 'Name', value: 'John Doe', button: { title: 'Edit' } },
    ];

    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Table data={tableData} />
      </MemoryRouter>
    );
  
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
    const buttonElement = getByTestId('table-row-button');
    expect(buttonElement).toBeInTheDocument();
  });  
});