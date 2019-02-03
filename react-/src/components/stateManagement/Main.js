import React , {Component} from "react";
import {observer} from "mobx-react";

@observer class Main extends Component {
    constructor(props) {
        super(props);
        console.log(props.store);

        this.state = {
            valueInput: ''
        };

        this.addUser = this.addUser.bind(this);
        this.inputChange = this.inputChange.bind(this)
    }

    addUser (e) {
        if(e.key === 'Enter'){
            this.props.store.addUser(this.state.valueInput);
            // this.forceUpdate();
        }
    }

    inputChange(e) {
        this.setState({valueInput: e.target.value})
    }

    render() {
        return (
            <div>
                <h3>Company: {this.props.store.company}</h3>
                <label htmlFor="input">
                    add item :
                    <input type="text" id="input" value={this.state.valueInput} onChange={(e) => this.inputChange(e)} onKeyPress={this.addUser}/>
                </label>
            </div>
        )
    }
}

export default Main;
