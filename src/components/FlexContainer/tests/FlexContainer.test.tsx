import React from 'react';
import { render } from '@testing-library/react';

import FlexContainer from '../FlexContainer';

const testId = 'testingFlexContainer';

type FlexContainerProps = React.ComponentProps<typeof FlexContainer>;

const renderComponent = (props: FlexContainerProps = {}) => render(
  <FlexContainer
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент FlexContainer', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
