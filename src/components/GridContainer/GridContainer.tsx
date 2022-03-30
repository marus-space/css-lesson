import React from 'react';
import clsx from 'clsx';

import styles from './GridContainer.module.scss';

type ElementProps = {
  number: number;
  elementClass?: string;
};

const Element: React.FC<ElementProps> = ({ number, elementClass }): React.ReactElement => (
  <div className={clsx(styles.element, elementClass)}>
    <span>{number}</span>
  </div>
);

type GridContainerProps = {
  containerClass?: string;
  elementClass?: string;
};

const GridContainer: React.FC<GridContainerProps> = ({ containerClass, elementClass }) => (
  <div className={clsx(styles.component, containerClass)}>
    {[1, 2, 3, 4, 5, 6]
      .map((el) => (<Element number={el} elementClass={elementClass} key={el} />))}
  </div>
);

export default GridContainer;
