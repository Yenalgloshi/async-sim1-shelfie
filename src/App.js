import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import router from './router';


class App extends Component {
  constructor(){
    super()

    this.state = {}   
  }
  render() {

 
    return (
      <div className="App">
        <nav>
            <ul>
              <Link to='/'>Home</Link>
              <Link to='/BinList'>BinList</Link>
              <Link to='/Inventory'>Inventory</Link>
            </ul>
        </nav>
        {router}
      </div>
    );
  }
}

export default App;
