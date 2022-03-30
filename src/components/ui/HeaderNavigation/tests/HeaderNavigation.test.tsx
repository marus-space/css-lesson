import React from 'react';
import { render } from '@testing-library/react';

import HeaderNavigation from '../HeaderNavigation';

const testId = 'testingHeaderNavigation';

type HeaderNavigationProps = React.ComponentProps<typeof HeaderNavigation>;

const renderComponent = (props: HeaderNavigationProps = {}) => render(
  <HeaderNavigation
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент HeaderNavigation', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
