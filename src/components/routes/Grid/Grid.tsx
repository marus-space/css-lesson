import React from 'react';
import { Typography } from '@ff/ui-kit';

import GridContainer from '../../GridContainer';
import styles from './Grid.module.scss';

const Grid: React.FC = () => {
  const renderData = [
    {
      title: 'grid-template-columns',
      examples: [
        {
          title: '60px 20% 1fr 2.5fr auto min-content;',
          containerClass: styles.gridTemplateColumns1,
          elementClass: undefined,
        },
        {
          title: 'repeat(4, 1fr);',
          containerClass: styles.gridTemplateColumns2,
          elementClass: undefined,
        },
        {
          title: 'repeat(autofill, 100px);',
          containerClass: styles.gridTemplateColumns3,
          elementClass: undefined,
        },
        {
          title: 'repeat(auto-fit, minmax(100px, 1fr));',
          containerClass: styles.gridTemplateColumns4,
          elementClass: undefined,
        },
      ],
    },
    {
      title: 'Размещение элементов по линиям',
      examples: [
        {
          title: 'элементы размещаются в гриде независимо их порядка в коде',
          containerClass: styles.gridTemplateAreas1,
          elementClass: undefined,
        },
      ],
    },
    {
      title: 'row-gap',
      examples: [
        {
          title: '12px;',
          containerClass: styles.rowGap,
          elementClass: undefined,
        },
      ],
    },
    {
      title: 'column-gap',
      examples: [
        {
          title: '12px;',
          containerClass: styles.columnGap,
          elementClass: undefined,
        },
      ],
    },
    {
      title: 'gap',
      examples: [
        {
          title: '12px;',
          containerClass: styles.gap,
          elementClass: undefined,
        },
      ],
    },
  ];

  return (
    <div className={styles.component}>
      {renderData.map((el) => (
        <div className={styles.container} key={el.title}>
          <Typography.Title>{el.title}</Typography.Title>
          {el.examples.map((example) => (
            <div className={styles.container} key={example.title}>
              <Typography>{el.title}: {example.title}</Typography>
              <GridContainer containerClass={example.containerClass} elementClass={example.elementClass} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
