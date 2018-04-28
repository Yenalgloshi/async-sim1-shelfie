import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';
import router from './router';

import Header from './components/Header/Header';

class App extends Component {
  constructor(){
    super()

    this.state = {
      shelves:[
          "Shelf A",
          "Shelf B",
          "Shelf C",
          "Shelf D",
          "Shelf E"
      ]
  }   
  }
  render() {
    let shelfDisplay = this.state.shelves.map((e,i) => <button key={i} className="sl-btn">{e}</button>)
 
    return (
      <div className="App">
        <Header />
        <div className='sl-1'>
          {shelfDisplay}
        </div>
        <nav>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/BinList'>Bin</Link>
            <Link to='/Inventory'>Inventory</Link>
          </ul>
        </nav>
        <br />

        {router}

      </div>
    );
  }
}

export default App;
