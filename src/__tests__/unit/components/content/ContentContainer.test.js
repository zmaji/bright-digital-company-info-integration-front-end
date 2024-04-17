import React from 'react';
import { render } from '@testing-library/react';
import ContentContainer from '../../../../components/content/ContentContainer';

describe('ContentContainer Component', () => {
  it('renders content container with children', () => {
    const childText = 'Test Child Component';

    const { getByText } = render(
      <ContentContainer>
        {childText}
      </ContentContainer>
    );

    const contentContainerElement = getByText(childText);
    expect(contentContainerElement).toBeInTheDocument();
  });

  it('renders content container with custom padding', () => {
    const padding = 'default';

    const { container } = render(
      <ContentContainer padding={padding}>
        <div>Test Child Component</div>
      </ContentContainer>
    );

    const contentContainer = container.querySelector('.c-default-layout__content-container');
    expect(contentContainer).toHaveClass(`c-default-layout__content-container__padding--${padding}`);
  });
});
