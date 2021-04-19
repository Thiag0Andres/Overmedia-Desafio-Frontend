import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Benefits from './pages/Benefits';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu-beneficios" exact component={Benefits} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
