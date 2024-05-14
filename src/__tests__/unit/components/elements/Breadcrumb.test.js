import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import BreadCrumb from '../../../../components/Elements/BreadCrumb';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn()
}));

describe('BreadCrumb Component', () => {
  it('renders breadcrumb with correct links and separators', () => {
    const pathname = '/path/to/some/page';
    const paths = pathname.split('/').filter(path => path !== '');
    const location = { pathname };

    jest.spyOn(require('react-router-dom'), 'useLocation').mockReturnValue(location);

    const { getByText, queryAllByTestId } = render(
      <MemoryRouter initialEntries={[pathname]}>
        <Routes>
          <Route path='/path/to/some/page' element={<BreadCrumb />} />
        </Routes>
      </MemoryRouter>
    );

    const homeLink = getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute('href')).toBe('/overview');

    const separatorElements = queryAllByTestId('breadcrumb-icon');
    const expectedSeparators = paths.length;
    expect(separatorElements).toHaveLength(expectedSeparators);

    paths.forEach((path, index) => {
      const item = getByText(capitalizeFirstLetter(path.replace(/-/g, ' ')));
      expect(item).toBeInTheDocument();
      
      const expectedHref = `/${paths.slice(0, index + 1).join('/')}`;
      expect(item.getAttribute('href')).toBe(expectedHref);
    });
  });
});

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
