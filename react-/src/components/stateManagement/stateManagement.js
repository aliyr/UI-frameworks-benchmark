import React , {Component} from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import {observer} from 'mobx-react';
import TodoStore from '../../store/UsersStore';

@observer class StateManagement extends Component{

    render() {
        return (
            <div>
                <Main items={TodoStore}/>
                <Navbar />
            </div>
        )
    }
}

export default StateManagement;
