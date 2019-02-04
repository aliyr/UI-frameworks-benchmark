import React, { Component } from 'react';
import './checkbox.css';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.onInputValueChange = this.onInputValueChange.bind(this)
    }

    onInputValueChange() {
        this.props.valueChanged(!this.props.checkboxValue)
    }

    render() {
        const checkboxStyle = this.props.checkboxValue ? 'active-label' : '';

        return (
            <div>
                <input type="checkbox" checked={this.props.checkboxValue} onChange={this.onInputValueChange} id="checkbox" style={{display: 'none'}}/>
                <label className={'checkbox-container ' + checkboxStyle} htmlFor="checkbox">
                    <div className='checkbox-tag-container'>
                        <div className='checkbox'>

                        </div>
                    </div>
                    <div className='label'>
                        <div className='label-content'>{this.props.children}</div>
                    </div>
                </label>
            </div>
        );
    }
}
export default Checkbox;
