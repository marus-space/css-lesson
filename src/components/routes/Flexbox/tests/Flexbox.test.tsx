import React from 'react';
import { render } from '@testing-library/react';

import Flexbox from '../Flexbox';

const testId = 'testingFlexbox';

type FlexboxProps = React.ComponentProps<typeof Flexbox>;

const renderComponent = (props: FlexboxProps = {}) => render(
  <Flexbox
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Flexbox', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
