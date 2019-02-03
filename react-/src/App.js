import React, { Component } from 'react';
import './App.css';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import RouterLinks from "./router";


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '100%'}}>
          <RouterLinks/>
      </div>
    );
  }
}

export default App;
