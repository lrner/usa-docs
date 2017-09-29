// src/routes.js
import React from 'react';
import { Route, Switch } from 'react-router';

import Constitution from './components/Constitution';
import ConstitutionalAmendments from './components/ConstitutionalAmendments';
import BillOfRights from './components/BillOfRights';
import DeclarationOfIndependence from './components/DeclarationOfIndependence';
import ArticlesOfConfederation from './components/ArticlesOfConfederation';
import About from './components/About';
import NavBar from './components/NavBar';


const Routes = (props) => (
  <div>
    <Switch>
      <Route path="/bill-of-rights" component={BillOfRights} />
      <Route path="/constitution" component={Constitution} />
      <Route path="/declaration-of-independence" component={DeclarationOfIndependence} />
      <Route path="/articles-of-confederation" component={ArticlesOfConfederation} />
      <Route path="/constitutional-amendments" component={ConstitutionalAmendments} />
      <Route path="/about" component={About} />
      <Route path="/" component={Constitution} />
    </Switch>
    <NavBar />
  </div>
);

export default Routes;
