import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ShelfList from './components/ShelfList/ShelfList';
import Product from './components/Product/Product';
import Form from './components/Form/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ShelfList />
        <Product />
        <Form />
      </div>
    );
  }
}

export default App;
