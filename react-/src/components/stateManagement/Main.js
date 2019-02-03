import React , {Component} from "react";

class Main extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const todos = this.props.items.map((item, index) => {
            return (
                <div>{item}</div>
            )
        });

        return (
            <div>
                {todos}
            </div>
        )
    }
}

export default Main;
