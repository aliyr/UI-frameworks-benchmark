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
        this.addMoreCheckbox = this.addMoreCheckbox.bind(this)
    }

    state = {
        valueFirst: true,
        valueSecond:false,
        valueThird:true ,
         data : new Array(0)
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
    addMoreCheckbox(){
this.setState(
    this.state.data = new Array(500)
      
)
    }
    render() {
      

        for (let i = 0; i < this.state.data.length; i++) {
             this.state.data[i] =   <Checkbox></Checkbox> ;
            
        }

        return (
            <div className="App">
           <button onClick={this.addMoreCheckbox}>add 500 checkbox</button>
                {/* <div>{this.state.value.toString()}</div> */}
                {/* <Checkbox  id="first"> */}
                    {/*<img style={{width: '100px'}} src={logo} className="App-logo" alt="logo" />*/}
             
                    {/* <Textholder fname="gholi"/> */}
                {/* </Checkbox> */}
                
                {this.state.data}
            </div>
        );
    }
}
export default CheckboxWrapper;
