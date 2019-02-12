import React , {Component} from "react";
import {observer} from "mobx-react";
import someStore from '../Store';

@observer class loginForm extends Component{
    constructor(props) {
        super(props);
        this.verifyUser = this.verifyUser.bind(this)
    }
    state = {
        name : '',
        loginCHeck : '',
        userIsValid :null
    };
    verifyUser(loginName){

         const checkName = someStore.users.find((username) =>  {
           if (username.name === loginName) {
            this.setState({userIsValid : true});
            return ( username)
            } else {
                    this.setState({userIsValid : false})
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
        let result;
        if(this.state.userIsValid){
            this.props.history.push({
                pathname : `/profile/${this.state.loginCHeck.id}`
            });

           result =  <div>    {this.state.loginCHeck.id}</div>
        }else if (this.state.loginCHeck === undefined) {
            result =  <div>  your username is not valid</div>
        }
        return(
            <div>
               <input type='text' value={this.state.name}  onChange={ this.changeNameValue.bind(this) } />
               <button onClick={() => this.verifyUser(this.state.name)} >log in </button>
               <div>
                {result}
               </div>
            </div>
        )
    }
}

export default loginForm;
