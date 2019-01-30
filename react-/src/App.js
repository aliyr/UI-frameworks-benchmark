import React, { Component } from 'react';
import './App.css';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import VirtualScrollerExample from "./components/virtualScrollerExample";
import ApiRequest from './components/apiRequest';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const ind = () => <h2><VirtualScrollerExample/></h2>
class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '100%'}}>
<Router>
    <div>
      <ul>
<li>
    
            <Link to="/">home</Link>
            </li>
            <li>
            <Link to="/virtual/">virtual scroller</Link>
            </li>
            <li>
          <Link to="/api">api request</Link>
          </li>
          </ul>
            <Route path="/"  />
      <Route path="/virtual" exact component={VirtualScrollerExample} />
      <Route path="/api/" component={ApiRequest} />
    </div>
  </Router>
     
      </div>
    );
  }
}

export default App;
