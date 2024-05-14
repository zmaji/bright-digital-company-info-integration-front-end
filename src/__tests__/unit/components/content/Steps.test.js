import React from 'react';
import { render } from '@testing-library/react';
import Steps from '../../../../components/Content/Steps';

describe('Steps Component', () => {
  it('renders steps with given props', () => {
    const stepsData = [
      { title: 'Step 1' },
      { title: 'Step 2' },
      { title: 'Step 3' }
    ];
  
    const { getByText } = render(<Steps steps={stepsData} />);
  
    expect(getByText('Step 1')).toBeInTheDocument();
    expect(getByText('Step 2')).toBeInTheDocument();
    expect(getByText('Step 3')).toBeInTheDocument();
  });  
});
