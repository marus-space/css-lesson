import React from 'react';
import { Typography } from '@ff/ui-kit';

import FlexContainer from '../../FlexContainer';
import styles from './Flexbox.module.scss';

const Flexbox: React.FC = () => {
  const renderData = [
    {
      title: 'flex-direction',
      examples: [
        {
          title: 'row',
          containerClass: undefined,
          elementClass: undefined,
        },
        {
          title: 'column',
          containerClass: styles.flexDirectionColumn,
          elementClass: undefined,
        },
        {
          title: 'row-reverse',
          containerClass: styles.flexDirectionRowReverse,
          elementClass: undefined,
        },
        {
          title: 'column-reverse',
          containerClass: styles.flexDirectionColumnReverse,
          elementClass: undefined,
        },
      ],
    },
    {
      title: 'flex-wrap',
      examples: [
        {
          title: 'nowrap',
          containerClass: undefined,
          elementClass: styles.flexShrinkElement,
        },
        {
          title: 'wrap',
          containerClass: styles.flexWrapWrap,
          elementClass: styles.flexShrinkElement,
        },
        {
          title: 'wrap-reverse',
          containerClass: styles.flexWrapWrapReverse,
          elementClass: styles.flexShrinkElement,
        },
      ],
    },
    {
      title: 'justify-content',
      examples: [
        {
          title: 'flex-end',
          containerClass: styles.justifyContentEnd,
          elementClass: undefined,
        },
        {
          title: 'center',
          containerClass: styles.justifyContentCenter,
          elementClass: undefined,
        },
        {
          title: 'space-between',
          containerClass: styles.justifyContentSpaceBetween,
          elementClass: undefined,
        },
        {
          title: 'space-around',
          containerClass: styles.justifyContentSpaceAround,
          elementClass: undefined,
        },
        {
          title: 'space-evenly',
          containerClass: styles.justifyContentSpaceEvenly,
          elementClass: undefined,
        },
      ],
    },
    {
      title: 'align-items',
      examples: [
        {
          title: 'flex-end',
          containerClass: styles.alignItemsEnd,
          elementClass: undefined,
        },
        {
          title: 'center',
          containerClass: styles.alignItemsCenter,
          elementClass: undefined,
        },
        {
          title: 'stretch',
          containerClass: styles.alignItemsStretch,
          elementClass: styles.heightUnset,
        },
      ],
    },
    {
      title: 'align-content',
      examples: [
        {
          title: 'flex-end',
          containerClass: styles.alignContentEnd,
          elementClass: styles.flexShrinkElement,
        },
        {
          title: 'center',
          containerClass: styles.alignContentCenter,
          elementClass: styles.flexShrinkElement,
        },
        {
          title: 'space-between',
          containerClass: styles.alignContentSpaceBetween,
          elementClass: styles.flexShrinkElement,
        },
        {
          title: 'space-around',
          containerClass: styles.alignContentSpaceAround,
          elementClass: styles.flexShrinkElement,
        },
        {
          title: 'space-evenly',
          containerClass: styles.alignContentSpaceEvenly,
          elementClass: styles.flexShrinkElement,
        },
      ],
    },
    {
      title: 'row-gap',
      examples: [
        {
          title: '12px',
          containerClass: styles.rowGap,
          elementClass: styles.flexShrinkElement,
        },
      ],
    },
    {
      title: 'column-gap',
      examples: [
        {
          title: '12px',
          containerClass: styles.columnGap,
          elementClass: styles.flexShrinkElement,
        },
      ],
    },
    {
      title: 'gap',
      examples: [
        {
          title: '12px',
          containerClass: styles.gap,
          elementClass: styles.flexShrinkElement,
        },
      ],
    },
    {
      title: 'order',
      examples: [
        {
          title: '-1',
          containerClass: styles.order,
          elementClass: undefined,
        },
      ],
    },
    {
      title: 'flex-grow',
      examples: [
        {
          title: '1',
          containerClass: styles.flexGrow,
          elementClass: undefined,
        },
      ],
    },
    {
      title: 'flex-shrink',
      examples: [
        {
          title: '0',
          containerClass: styles.flexShrink,
          elementClass: undefined,
        },
      ],
    },
    {
      title: 'flex-basis',
      examples: [
        {
          title: '100px',
          containerClass: styles.flexBasis,
          elementClass: undefined,
        },
      ],
    },
    {
      title: 'align-self',
      examples: [
        {
          title: 'center',
          containerClass: styles.alignSelf,
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
              <Typography>{el.title}: {example.title};</Typography>
              <FlexContainer containerClass={example.containerClass} elementClass={example.elementClass} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Flexbox;
