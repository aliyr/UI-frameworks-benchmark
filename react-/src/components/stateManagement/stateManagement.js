import React , {Component} from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import someStore from '../Store';
import { persist ,hydrate} from 'mobx-persist';

class StateManagement extends Component{



    render() {
        return (
            <div>
                <Main store={someStore}/>
                <hr/>
                <Navbar store={someStore}/>
            </div>
        )
    }
}

export default StateManagement;
