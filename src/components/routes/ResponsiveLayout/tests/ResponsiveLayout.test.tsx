import React from 'react';
import { render } from '@testing-library/react';

import ResponsiveLayout from '../ResponsiveLayout';

const testId = 'testingResponsiveLayout';

type ResponsiveLayoutProps = React.ComponentProps<typeof ResponsiveLayout>;

const renderComponent = (props: ResponsiveLayoutProps = {}) => render(
  <ResponsiveLayout
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент ResponsiveLayout', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
