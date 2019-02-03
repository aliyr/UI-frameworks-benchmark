import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import VirtualScrollerExample from "./components/virtualScrollerExample";
import ApiRequest from "./components/apiRequest";
import CheckboxWrapper from "./components/checkboxWrapper/checkboxWrapper";
import React , {Component} from "react";

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
                    <li><Link to="/checkbox">checkbox</Link>
                    </li>
                </ul>
                <Route path="/"  />
                <Route path="/virtual" exact component={VirtualScrollerExample} />
                <Route path="/api/" component={ApiRequest} />
                <Route path="/checkbox/" component={CheckboxWrapper} />
            </div>
        </Router>
    )
}

}

export default RouterLinks;
