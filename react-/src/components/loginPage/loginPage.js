import React , {Component} from "react";
import {observer} from "mobx-react";
import someStore from '../Store';
import { debug } from "util";

@observer class loginForm extends Component{
    user = ' ';
 
    constructor(props) {
        super(props);
        this.verifyUser = this.verifyUser.bind(this);


        this.state = {
            name : '',
            loginCHeck : '',
            userIsValid :null
        };
    }
    state = {
        name : '',
        loginCHeck : '',
        userIsValid :null,
        routeChange : true 
    };
    verifyUser(loginName){
        console.log("login name " + loginName)
         const browserHistory = this.props.history;
         let that = this;
         const checkName = someStore.users.find((username) =>  {
            if (username.name === loginName) {
                that.setState({userIsValid : true});
                console.log(username.name)
                const userId = someStore.users.find(p => p.name === loginName).id;
                browserHistory.push(`/profile/${userId}`);
                this.setState({routeChange : false})
                return ;
            } else {
               that.setState({userIsValid : false});
               return ;
            }
         });
         this.setState({
             loginCHeck: checkName
         })
    }
    changeNameValue(e){
        this.setState({ name: e.target.value });
    }
    render(){

        return(
            <div> 
               <input type='text' value={this.state.name}  onChange={ this.changeNameValue.bind(this) } />
               <button onClick={() => this.verifyUser(this.state.name)} >log in </button>
               <div>
                   {this.state.userIsValid === false ? <div>  your username is not valid</div> : ''}
               </div>
            </div>
        )
    }
}

export default loginForm;
