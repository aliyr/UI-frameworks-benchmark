import React, {
    Component
} from 'react';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckboxTree from 'react-checkbox-tree';

export class treeView extends Component {
    constructor() {
        super();
        this.state = {
             nodes : [{ value: 'parent num 1' , label: 'parent num 1' },{ value: 'parent num 2' , label: 'parent num 2'}],
            checked: [],
            expanded: [],
            arr :  []
        };
        this.addMore = this.addMore.bind(this);
    }
    addMore() {
        if(this.state.nodes.length < 500){
             for (let i = 0; i <= 500; i++) {
                this.setState({
                   arr  : this.state.arr.push({value: 'parent num ' + i , label: 'parent num ' + i}),
                   nodes: this.state.nodes.concat(this.state.arr),
                   arr:[],
                })
         }
        }
    }

    render() {
        return (

            <div >
                <div className = "customHeight" >

                <CheckboxTree 
                nodes = {this.state.nodes}
                checked = {this.state.checked}
                expanded = {this.state.expanded}
                onCheck = {checked => this.setState({checked})}
                onExpand = { expanded => this.setState({expanded})} >
                </CheckboxTree>

                </div> <button onClick = {this.addMore}> add More </button>
            </div>
        )
    }
}
export default treeView