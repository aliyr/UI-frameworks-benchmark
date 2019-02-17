import React , {Component} from "react";
import {observer} from "mobx-react";
import someStore from '../Store';

@observer class loginForm extends Component{
    constructor(props) {
        super(props);
        this.verifyUser = this.verifyUser.bind(this);


        this.state = {
            name : '',
            loginCHeck : '',
            userIsValid :null
        };
    }
    verifyUser(loginName){
        const browserHistory = this.props.history;
        debugger;
        let that = this;
         const checkName = someStore.users.find((username) =>  {
            if (username.name === loginName) {
                that.setState({userIsValid : true});
                let aaa = that.state;
                const userId = someStore.users.find(p => p.name === loginName).id;
                browserHistory.push(`/profile/${userId}`);
                return true;
            } else {
               this.setState({userIsValid : false});
               return false;
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
