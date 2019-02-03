import React , {Component} from "react";
import Main from "./Main";
import Navbar from "./Navbar";

class StateManagement extends Component{
    render() {
        return (
            <div>
                <Main/>
                <Navbar/>
            </div>
        )
    }
}

export default StateManagement;
