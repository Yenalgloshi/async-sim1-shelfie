import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import BinList from './components/BinList/BinList';
import Inventory from './components/Inventory/Inventory';
import AddInventory from './components/AddInventory/AddInventory';


export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/BinList/:shelf' component={ BinList } />
    <Route path='/Inventory/:shelf/:id' component={ Inventory } />
    <Route path='/AddInventory/:shelf/:id' component={ AddInventory } />
  </Switch>
)