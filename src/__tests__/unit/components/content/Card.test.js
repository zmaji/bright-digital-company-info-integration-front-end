import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from '../../../../components/Content/Card';

describe('Card Component', () => {
  it('renders card with given props', () => {
    const overviewCardData = {
      icon: 'DownloadGradient',
      title: 'Install script',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.',
      button: {
        title: 'Start now',
        style: 'tertiary',
        link: '/install-script',
        icon: 'ArrowRight',
        animation: 'move-right'
      }
    };
  
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Card {...overviewCardData} />
      </MemoryRouter>
    );
  
    expect(getByText('Install script')).toBeInTheDocument();
  
    const iconElement = getByTestId('card-icon');
    expect(iconElement).toBeInTheDocument();
  
    const buttonElement = getByTestId('card-button');
    expect(buttonElement).toBeInTheDocument();
  });  
});
