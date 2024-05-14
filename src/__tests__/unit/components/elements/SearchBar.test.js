import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import SearchBar from '../../../../components/elements/SearchBar'; 
import { MemoryRouter } from 'react-router-dom';

describe('SearchBar Component', () => {
  it('should update search term on input change and call onSearch with the correct value on button click', () => {
    const mockOnSearch = jest.fn(); 
    const { getByPlaceholderText, getByTestId } = render(
    
    <MemoryRouter>
      <SearchBar onSearch={mockOnSearch} />
    </MemoryRouter>
    );

    const inputElement = getByPlaceholderText('Trade name'); 
    const buttonElement = getByTestId('button-component'); 

    fireEvent.change(inputElement, { target: { value: 'MyTrade' } });

    expect(inputElement.value).toBe('MyTrade');

    fireEvent.click(buttonElement);

    expect(mockOnSearch).toHaveBeenCalledWith('MyTrade');
  });
});