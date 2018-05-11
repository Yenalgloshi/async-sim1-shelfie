import React, { Component } from 'react';
import './App.css';
import router from './router';


class App extends Component {
  // constructor(){          // state not needed for this component
  //   super()

  //   this.state = {}   
  // }
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

export default App;
