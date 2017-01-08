import React, { Component } from 'react';
import Calc from './Calc';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-header-title">
            Freeze Mage Damage Calculator
          </h1>
        </div>
        <div className="App-content">
          <Calc />
        </div>
      </div>
    );
  }
}

export default App;
