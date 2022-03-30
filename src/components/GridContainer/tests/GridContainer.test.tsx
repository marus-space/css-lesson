import React from 'react';
import { render } from '@testing-library/react';

import GridContainer from '../GridContainer';

const testId = 'testingGridContainer';

type GridContainerProps = React.ComponentProps<typeof GridContainer>;

const renderComponent = (props: GridContainerProps = {}) => render(
  <GridContainer
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент GridContainer', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
