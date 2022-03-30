import React from 'react';
import { render } from '@testing-library/react';

import AdaptiveLayout from '../AdaptiveLayout';

const testId = 'testingAdaptiveLayout';

type AdaptiveLayoutProps = React.ComponentProps<typeof AdaptiveLayout>;

const renderComponent = (props: AdaptiveLayoutProps = {}) => render(
  <AdaptiveLayout
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент AdaptiveLayout', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
