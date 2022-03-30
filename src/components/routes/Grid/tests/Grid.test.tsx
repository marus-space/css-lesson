import React from 'react';
import { render } from '@testing-library/react';

import Grid from '../Grid';

const testId = 'testingGrid';

type GridProps = React.ComponentProps<typeof Grid>;

const renderComponent = (props: GridProps = {}) => render(
  <Grid
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Grid', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
