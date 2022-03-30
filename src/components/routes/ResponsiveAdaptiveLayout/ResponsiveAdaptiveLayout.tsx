import React from 'react';

import Card from '../../Card';
import styles from './ResponsiveAdaptiveLayout.module.scss';

const ResponsiveAdaptiveLayout: React.FC = () => (
  <div className={styles.component}>
    <div className={styles.container}>
      {[1, 2, 3, 4, 5, 6].map((index) => (<Card key={index} />))}
    </div>
  </div>
);

export default ResponsiveAdaptiveLayout;
