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
            this.props.store.addUser(this.props.store.draftedItem);
            // this.forceUpdate();
        }
    }

    inputChange(e) {
        this.props.store.draftedItem = e.target.value;
    }

    render() {
        return (
            <div>
                <h3>Company: {this.props.store.company}</h3>
                <label htmlFor="input">
                    add item :
                    <input type="text"
                           id="input"
                           value={this.props.store.draftedItem}
                           onChange={(e) => this.inputChange(e)}
                           onKeyPress={this.addUser}/>
                </label>
            </div>
        )
    }
}

export default Main;
