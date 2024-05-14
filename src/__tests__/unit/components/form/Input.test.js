import React from 'react';
import { render } from '@testing-library/react';
import Input from '../../../../components/form/Input'; 

describe('Input Component', () => {
  it('renders input field correctly', () => {
    const { getByTestId } = render(
      <Input type="text" name="testInput" value="" onChange={() => {}} style="default" />
    );

    const inputElement = getByTestId('input-component');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('name', 'testInput');
    expect(inputElement).toHaveValue('');
  });

  it('renders error icon and message when there is an error', () => {
    const { getByText, getByAltText } = render(
      <Input
        type="text"
        name="testInput"
        value=""
        onChange={() => {}}
        style="default"
        validationError="Validation error message"
      />
    );

    const errorIcon = getByAltText('Invalid Icon');
    expect(errorIcon).toBeInTheDocument();

    const errorMessage = getByText('Validation error message');
    expect(errorMessage).toBeInTheDocument();
  });
});