import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Button from '../../../../components/elements/Button';

describe('Button Component', () => {
  it('renders button with correct link, style, and title', () => {
    const buttonData = {
      style: 'primary',
      link: '/example',
      title: 'Click me',
      animation: 'move-left',
      customStyle: 'large',
      onClick: jest.fn(),
    };

    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Button {...buttonData} />
      </MemoryRouter>
    );

    const buttonElement = getByTestId('button-component');
    expect(buttonElement).toHaveAttribute('href', '/example');
    expect(buttonElement).toHaveClass('c-button c-button--primary');

    const titleElement = getByText('Click me');
    expect(titleElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(buttonData.onClick).toHaveBeenCalled();
  });
});
