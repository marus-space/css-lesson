import React from 'react';
import { render } from '@testing-library/react';

import Card from '../Card';

const testId = 'testingCard';

type CardProps = React.ComponentProps<typeof Card>;

const renderComponent = (props: CardProps = {}) => render(
  <Card
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Card', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
