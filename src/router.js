import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import BinList from './components/BinList/BinList';
import Inventory from './components/Inventory/Inventory';

export default (
  <Switch>
    <Route exact path='/' component={ App } />
    <Route path='/BinList' component={ BinList } />
    <Route path='/Inventory' component={ Inventory } />
  </Switch>
)