import React from 'react';

import AppRouter from '../AppRouter';
import HeaderNavigation from '../ui/HeaderNavigation';
import classes from './App.module.scss';

const App: React.FC = () => (
  <main className={classes.component}>
    <HeaderNavigation />
    <section className={classes.content}>
      <AppRouter />
    </section>
  </main>
);

export default App;
