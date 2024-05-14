import React from 'react';
import { render } from '@testing-library/react';
import LogoRow from '../../../../components/elements/LogoRow'
import logoRowData from '../../../../data/DefaultLogoRow';

describe('LogoRow Component', () => {
  it('renders correctly with provided logos', () => {
    const { getAllByAltText } = render(<LogoRow logos={logoRowData} />);

    const logoImages = getAllByAltText('Logo');
    expect(logoImages).toHaveLength(logoRowData.length);

    logoImages.forEach((image, index) => {
      expect(image).toHaveAttribute('src', logoRowData[index]);
    });
  });
});
