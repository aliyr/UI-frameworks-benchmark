import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VirtualScrollerExample from "./components/virtualScrollerExample";

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '100%'}}>
        <VirtualScrollerExample/>
      </div>
    );
  }
}

export default App;
