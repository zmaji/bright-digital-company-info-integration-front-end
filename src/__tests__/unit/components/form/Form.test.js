import React from 'react';
import { render } from '@testing-library/react';
import Form from '../../../../components/form/Form'; 
import Input from '../../../../components/form/Input'; 
import Label from '../../../../components/form/Label'; 

describe('Form Component', () => {
  it('renders correctly with children', () => {
    const { getByTestId } = render(
      <Form style="default">
        <Input type="text" name="testInput" value="" onChange={() => {}} />
        <Label text="Test Label" />
      </Form>
    );

    const formElement = getByTestId('form-component');
    expect(formElement).toBeInTheDocument();

    const inputElement = getByTestId('input-component');
    expect(inputElement).toBeInTheDocument();

    const labelElement = getByTestId('label-component');
    expect(labelElement).toBeInTheDocument();
  });
});