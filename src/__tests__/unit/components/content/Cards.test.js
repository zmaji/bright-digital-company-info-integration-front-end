import React from 'react';
import { render } from '@testing-library/react';
import Cards from '../../../../components/content/Cards';
import { MemoryRouter } from 'react-router-dom';

describe('Cards Component', () => {
  it('renders cards with given props', () => {
    const overviewCardsData = [
      {
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
      },
    ];

    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Cards cardData={overviewCardsData} />
      </MemoryRouter>
    );

    overviewCardsData.forEach((cardData) => {
      const titleElement = getByText(cardData.title);
      expect(titleElement).toBeInTheDocument();

      const iconElement = getByTestId(`card-icon`);
      expect(iconElement).toBeInTheDocument();

      if (cardData.button) {
        const buttonElement = getByTestId(`card-button`);
        expect(buttonElement).toBeInTheDocument();
      }
    });
  });
});
