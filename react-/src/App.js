import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import VirtualScrollerExample from "./components/virtualScrollerExample";
import ApiRequest from './components/apiRequest';
import CheckboxWrapper from "./components/checkboxWrapper/checkboxWrapper";

import './App.css';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';


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
                  <li><Link to="/checkbox">checkbox</Link>
                  </li>
              </ul>
              <Route path="/"  />
              <Route path="/virtual" exact component={VirtualScrollerExample} />
              <Route path="/api/" component={ApiRequest} />
              <Route path="/checkbox/" component={CheckboxWrapper} />
            </div>
          </Router>

      </div>
    );
  }
}

export default App;
