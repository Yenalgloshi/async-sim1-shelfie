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
        {router}
      </div>
    );
  }
}

export default App;
