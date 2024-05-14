import React from 'react';
import { render } from '@testing-library/react';
import HorizontalSteps from '../../../../components/Content/HorizontalSteps';

describe('HorizontalSteps Component', () => {
  it('renders HorizontalSteps with given steps', () => {
    const stepsData = [
      { title: 'Step 1', icon: 'step1-icon.png' },
      { title: 'Step 2', icon: 'step2-icon.png' },
      { title: 'Step 3', icon: 'step3-icon.png' },
    ];

    const { getByText } = render(
      <HorizontalSteps steps={stepsData} />
    );

    expect(getByText('Step 1')).toBeInTheDocument();
    expect(getByText('Step 2')).toBeInTheDocument();
    expect(getByText('Step 3')).toBeInTheDocument();
  });
});