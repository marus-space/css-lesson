import React from 'react';
import { render } from '@testing-library/react';

import ResponsiveAdaptiveLayout from '../ResponsiveAdaptiveLayout';

const testId = 'testingResponsiveAdaptiveLayout';

type ResponsiveAdaptiveLayoutProps = React.ComponentProps<typeof ResponsiveAdaptiveLayout>;

const renderComponent = (props: ResponsiveAdaptiveLayoutProps = {}) => render(
  <ResponsiveAdaptiveLayout
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент ResponsiveAdaptiveLayout', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
