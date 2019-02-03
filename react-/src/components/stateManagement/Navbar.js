import React , {Component} from "react";
import {observer} from "mobx-react";

@observer class Navbar extends Component {

    dataContentChanged(i) {
        this.props.store.updateUser(i);
    }

    render() {
        return (
            <div>
                {this.props.store.users.map((item, index) =>
                    <div key={item.id} onClick={() => this.dataContentChanged(index)}>{item.name}</div>
                )}
            </div>
        )
    }
}

export default Navbar;
