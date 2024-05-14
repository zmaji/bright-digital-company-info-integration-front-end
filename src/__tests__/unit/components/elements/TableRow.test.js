import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TableRow from '../../../../components/Elements/TableRow';

describe('TableRow Component', () => {
  it('renders table row with given props', () => {
    const rowData = { title: 'Name', value: 'John Doe', button: { title: 'Edit' } };
  
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <TableRow {...rowData} />
      </MemoryRouter>
    );
  
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
    const buttonElement = getByTestId('table-row-button');
    expect(buttonElement).toBeInTheDocument();
  
  });  

  it('handles edit click and renders input field', () => {
    const rowData = { title: 'Name', value: 'John Doe', button: { title: 'Edit' } };
  
    const { getByDisplayValue, getByTestId } = render(
      <MemoryRouter>
        <TableRow {...rowData} />
      </MemoryRouter>
    );
  
    const buttonElement = getByTestId('table-row-button');
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
  });  
});