import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignupHeader from '../../../../components/header/SignupHeader';

describe('SignupHeader Component', () => {
  it('renders the Bright Digital logo with the correct src attribute', () => {
    render(
      <MemoryRouter>
        <SignupHeader />
      </MemoryRouter>
    );

    const logoElement = screen.getByAltText('Bright Digital Logo');
    expect(logoElement).toBeInTheDocument();

    const expectedSrc = 'logo-bright-zw.svg';
    expect(logoElement).toHaveAttribute('src', expectedSrc);
  });

  it('renders the HubspotSticker component', () => {
    render(
      <MemoryRouter>
        <SignupHeader />
      </MemoryRouter>
    );

    const stickerContainer = screen.getByTestId('hubspot-sticker');
    expect(stickerContainer).toBeInTheDocument();
  });

  it('renders the return button with the correct props', () => {
    render(
      <MemoryRouter>
        <SignupHeader />
      </MemoryRouter>
    );

    const returnButton = screen.getByText('Return');
    expect(returnButton).toBeInTheDocument();
    expect(returnButton).toHaveClass('c-button__title');
  });

  it('renders all necessary containers and elements', () => {
    render(
      <MemoryRouter>
        <SignupHeader />
      </MemoryRouter>
    );
  
    const headerContainer = document.querySelector('.c-signup-header__container');
    expect(headerContainer).toBeInTheDocument();
  
    const logoContainer = document.querySelector('.c-signup-header__logo-container');
    expect(logoContainer).toBeInTheDocument();
  
    const stickerContainer = document.querySelector('.c-hubspot-sticker');
    expect(stickerContainer).toBeInTheDocument();
  
    const returnButton = screen.getByText('Return');
    expect(returnButton).toBeInTheDocument();
  });
});
