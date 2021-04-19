import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import BenefitsVIBE from './pages/BenefitsVIBE';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu-beneficios" exact component={Benefits} />
        <Route path="/menu-beneficios/VIBE" exact component={BenefitsVIBE} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
