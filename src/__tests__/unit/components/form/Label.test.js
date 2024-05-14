import React from 'react';
import { render } from '@testing-library/react';
import Label from '../../../../components/form/Label'; 

describe('Label Component', () => {
  it('renders label text correctly', () => {
    const { getByTestId } = render(<Label text="Test Label" />);

    const labelElement = getByTestId('label-component');
    expect(labelElement).toBeInTheDocument();
  });
});