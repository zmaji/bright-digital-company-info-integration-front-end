import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ActivateBar from '../../../../components/elements/ActivateBar'; 
import { MemoryRouter } from 'react-router-dom';

describe('ActivateBar Component', () => {
  it('should update activation code on input change and call onSubmit with the correct value on button click', () => {
    const mockOnSubmit = jest.fn(); 

    const { getByPlaceholderText, getByTestId } = render(
    <MemoryRouter>
     <ActivateBar onSubmit={mockOnSubmit} />
    </MemoryRouter>
    );

    const inputElement = getByPlaceholderText('Activation code'); 
    const buttonElement = getByTestId('button-component');

    fireEvent.change(inputElement, { target: { value: '12345' } });

    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe('12345');

    expect(mockOnSubmit).toHaveBeenCalledWith('12345');
  });
});