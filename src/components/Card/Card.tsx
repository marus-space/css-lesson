import React from 'react';
import { Button } from '@ff/ui-kit';

import styles from './Card.module.scss';

const Card: React.FC = () => (
  <div className={styles.component}>
    <div className={styles.image} />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
);

export default Card;
