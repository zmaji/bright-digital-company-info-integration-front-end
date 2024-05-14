import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import InstallHeader from '../../../../components/header/InstallHeader';

describe('InstallHeader Component', () => {
  it('renders the logo with the correct src attribute', () => {
    render(
      <MemoryRouter>
        <InstallHeader />
      </MemoryRouter>
    );
    
    const logoElement = screen.getByAltText('Bright Digital Logo');
    expect(logoElement).toBeInTheDocument();

    const expectedSrc = 'logo-bright-zw.svg';
    expect(logoElement).toHaveAttribute('src', expectedSrc);
  });
});