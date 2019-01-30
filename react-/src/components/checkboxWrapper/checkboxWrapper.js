import React, { Component } from 'react';
import Checkbox from "./checkbox";
class CheckboxWrapper extends Component {
    constructor(props) {
        super(props);
        this.valueChange = this.valueChange.bind(this)
    }

    state = {
        value: false
    };

    valueChange (e) {
        this.setState({value: e});
    }

    render() {
        return (
            <div className="App">
                <div>{this.state.value.toString()}</div>
                <Checkbox checkboxValue={this.state.value} valueChanged={this.valueChange}>gholi</Checkbox>
            </div>
        );
    }
}
export default CheckboxWrapper;
