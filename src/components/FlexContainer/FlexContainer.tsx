import React from 'react';
import clsx from 'clsx';

import styles from './FlexContainer.module.scss';

type ElementProps = {
  number: number;
  elementClass?: string;
};

const Element: React.FC<ElementProps> = ({ number, elementClass }): React.ReactElement => (
  <div className={clsx(styles.element, elementClass)}>
    <span>{number}</span>
  </div>
);

type FlexContainerProps = {
  containerClass?: string;
  elementClass?: string;
};

const FlexContainer: React.FC<FlexContainerProps> = ({ containerClass, elementClass }) => (
  <div className={clsx(styles.component, containerClass)}>
    {[1, 2, 3, 4, 5].map((el) => (<Element number={el} elementClass={elementClass} key={el} />))}
  </div>
);

export default FlexContainer;
