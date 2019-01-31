import React, { Component } from 'react';

class Textholder extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>{this.props.fname}</div>
        );
    }
}
export default Textholder;
