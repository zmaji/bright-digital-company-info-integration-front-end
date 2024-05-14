import React from 'react';
import { render, screen } from '@testing-library/react';
import SidebarCategory from '../../../../components/Sidebar/SidebarCategory';

describe('SidebarCategory Component', () => {
  it('renders the category title correctly', () => {
    const title = 'Test Category';
    render(<SidebarCategory title={title} />);
    const categoryTitle = screen.getByText(title);
    expect(categoryTitle).toBeInTheDocument();
  });
});