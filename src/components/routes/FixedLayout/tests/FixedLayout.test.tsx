import React from 'react';
import { render } from '@testing-library/react';

import FixedLayout from '../FixedLayout';

const testId = 'testingFixedLayout';

type FixedLayoutProps = React.ComponentProps<typeof FixedLayout>;

const renderComponent = (props: FixedLayoutProps = {}) => render(
  <FixedLayout
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент FixedLayout', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
