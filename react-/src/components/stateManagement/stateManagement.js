import React , {Component} from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import UsersStore from '../Store';

class StateManagement extends Component{

    componentDidMount() {
        UsersStore.getUsers();
        UsersStore.getCompany();
    }

    render() {
        return (
            <div>
                <Main store={UsersStore}/>
                <hr/>
                <Navbar store={UsersStore}/>
            </div>
        )
    }
}

export default StateManagement;
