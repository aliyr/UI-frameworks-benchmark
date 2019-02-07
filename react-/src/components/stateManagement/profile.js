import React , {Component} from "react";
import {observer} from "mobx-react";

@observer class profile extends Component {

    constructor(props){

        super(props);
    }

    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}

export default profile;
