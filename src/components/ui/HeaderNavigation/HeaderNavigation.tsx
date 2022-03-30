import React from 'react';
import { Navigation } from '@ff/ui-kit';
import { NavLink } from 'react-router-dom';

import styles from './HeaderNavigation.module.scss';

type LinkType = {
  title: string;
  path: string;
};

const HeaderNavigation: React.FC = () => {
  const linksData: Array<LinkType> = [
    {
      title: 'Фиксированная',
      path: '/fixed',
    },
    {
      title: 'Отзывчивая',
      path: '/responsive',
    },
    {
      title: 'Адаптивная',
      path: '/adaptive',
    },
    {
      title: 'Отзывчиво-адаптивная',
      path: '/responsive-adaptive',
    },
    {
      title: 'CSS Flexbox',
      path: '/flexbox',
    },
    {
      title: 'CSS Grid',
      path: '/grid',
    },
  ];

  return (
    <Navigation horizontal className={styles.component}>
      {linksData.map((link) => (
        <NavLink to={link.path} className={styles.link} key={link.title}>
          {link.title}
        </NavLink>
      ))}
    </Navigation>
  );
};

export default HeaderNavigation;
