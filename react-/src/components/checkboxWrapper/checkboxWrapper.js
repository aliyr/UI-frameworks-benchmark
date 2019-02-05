import React, { Component } from 'react';
import Checkbox from "./checkbox";
import logo from '../../logo.svg';
import Textholder from '../textholder'
class CheckboxWrapper extends Component {
    constructor(props) {
        super(props);
        this.valueChangeFirst = this.valueChangeFirst.bind(this);
        this.valueChangeSecond = this.valueChangeSecond.bind(this)
        this.valueChangeThird = this.valueChangeThird.bind(this)
    }

    state = {
        valueFirst: true,
        valueSecond:false,
        valueThird:true 
    };

    valueChangeFirst (e) {
        this.setState({valueFirst: e});
        alert("value")
    }
    valueChangeSecond (e) {
        this.setState({valueSecond: e});
        alert("value")
    }
    valueChangeThird (e) {
        this.setState({valueThird: e});
        alert("value")
    }

    render() {
        return (
            <div className="App">
                {/* <div>{this.state.value.toString()}</div> */}
                <Checkbox checkboxValue={this.state.valueFirst} valueChanged={this.valueChangeFirst} id="first">
                    {/*<img style={{width: '100px'}} src={logo} className="App-logo" alt="logo" />*/}
                    
                    <Textholder fname="gholi"/>
                </Checkbox>

                <div>
                <Checkbox checkboxValue={this.state.valueSecond} valueChanged={this.valueChangeSecond} id="second">
                    {/*<img style={{width: '100px'}} src={logo} className="App-logo" alt="logo" />*/}
                    
                    <Textholder fname="gholi"/>
                </Checkbox>

                </div>

                
                <div>
                <Checkbox checkboxValue={this.state.valueThird} valueChanged={this.valueChangeThird} id="third">
                    {/*<img style={{width: '100px'}} src={logo} className="App-logo" alt="logo" />*/}
                    
                    <Textholder fname="gholi"/>
                </Checkbox>

                </div>
            </div>
        );
    }
}
export default CheckboxWrapper;
