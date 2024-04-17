import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HubspotSticker from '../../../../components/elements/HubspotSticker';

describe('HubspotSticker Component', () => {
  it('renders correctly', () => {
    const { getByAltText, getAllByAltText, getByText } = render(
      <MemoryRouter>
        <HubspotSticker />
      </MemoryRouter>
    );

    const stickerIcon = getByAltText('HubSpot Review Sticker');
    expect(stickerIcon).toBeInTheDocument();

    const starIcons = getAllByAltText('Star Icon');
    expect(starIcons).toHaveLength(5);

    const ratingTitle = getByText('5/5');
    expect(ratingTitle).toBeInTheDocument();

    const buttonTitle = getByText('Bekijk alle reviews');
    expect(buttonTitle).toBeInTheDocument();

    const buttonLink = getByText('Bekijk alle reviews').closest('a');
    expect(buttonLink).toHaveAttribute('href', 'https://ecosystem.hubspot.com/marketplace/solutions/bright-digital');
  });
});
