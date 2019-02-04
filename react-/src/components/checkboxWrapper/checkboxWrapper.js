import React, { Component } from 'react';
import Checkbox from "./checkbox";
import logo from '../../logo.svg';
import Textholder from '../textholder'
class CheckboxWrapper extends Component {
    constructor(props) {
        super(props);
        this.valueChange = this.valueChange.bind(this)
    }

    state = {
        value: true
    };

    valueChange (e) {
        this.setState({value: e});
        alert(e)
    }

    render() {
        return (
            <div className="App">
                <div>{this.state.value.toString()}</div>
                <Checkbox checkboxValue={this.state.value} valueChanged={this.valueChange}>
                    {/*<img style={{width: '100px'}} src={logo} className="App-logo" alt="logo" />*/}
                    
                    <Textholder fname="gholi"/>
                </Checkbox>
            </div>
        );
    }
}
export default CheckboxWrapper;
