import React, {Component} from 'react';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckboxTree from 'react-checkbox-tree';

const nodes= []

export  class treeView extends Component{
    
    constructor() {
        super();
        this.state = {
             nodes : [],
            checked: [],
            expanded: [],
        };
   
    }
    addMore (){
        for(let i =0 ; i<=5 ; i++){
         nodes.push({
            value: 'parent num' + i ,
            label: 'parent num' + i ,
            children : [
                { value: '1', label: '1' }, 
                { value: '2', label: '2' },
            ]


         })
    }
    console.log(nodes) 
}


render(){
    return(
        
       <div>
 <div className="customHeight">

<CheckboxTree
 nodes={nodes} 
 checked={this.state.checked}  
 expanded={this.state.expanded}      
 onCheck={checked => this.setState({ checked })} 
 onExpand={expanded => this.setState({ expanded })}
 ></CheckboxTree>


    



</div>

<button onClick={this.addMore}>add More</button>


       </div>
    )
}
}
export default treeView 
