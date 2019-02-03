import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import VirtualScrollerExample from "./components/virtualScrollerExample";
import ApiRequest from "./components/apiRequest";
import CheckboxWrapper from "./components/checkboxWrapper/checkboxWrapper";
import React , {Component} from "react";
import StateManagement from "./components/stateManagement/stateManagement";

 class RouterLinks extends Component{
    render() {
        return (
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
                        <li>
                            <Link to="/checkbox">checkbox</Link>
                        </li>
                        <li>
                            <Link to="/state-management">state management</Link>
                        </li>
                    </ul>
                    <Route path="/"  />
                    <Route path="/virtual" exact component={VirtualScrollerExample} />
                    <Route path="/api/" component={ApiRequest} />
                    <Route path="/checkbox/" component={CheckboxWrapper} />
                    <Route path="/state-management" component={StateManagement} />
                </div>
            </Router>
        )
    }
}

export default RouterLinks;
