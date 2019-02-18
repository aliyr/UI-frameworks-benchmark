import React, { Component } from 'react';
import Checkbox from "./checkbox";
import logo from '../../logo.svg';
import Textholder from '../textholder'
import uuid from "uuid";
class CheckboxWrapper extends Component {
    constructor(props) {
        super(props);
        this.valueChangeFirst = this.valueChangeFirst.bind(this);
        this.addMoreCheckbox = this.addMoreCheckbox.bind(this)

    }

    state = {

        valueFirst: true,
        valueSecond:false,
        valueThird:true ,
         data : new Array(0),
     
    };

    valueChangeFirst (e) {
        this.setState({valueFirst: e});
    }

    addMoreCheckbox(){
this.setState(
    this.state.data = new Array(500)   
)
    }
    render() {
      
        for (let i = 0; i < this.state.data.length; i++) {
             this.state.data[i] =   <Checkbox> {i}</Checkbox> ; 
        }

        return (
            <div className="App">
            <button onClick={this.addMoreCheckbox}>add 500 checkbox</button>

                 <Checkbox id={uuid.v4()} checkboxValue={this.state.valueFirst} valueChanged={this.valueChangeFirst}>             
                     <Textholder fname="gholi"/> 
                 </Checkbox> 
                 
                {this.state.data}
            </div> 
        );
    }
}
export default CheckboxWrapper;