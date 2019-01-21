import React, {Component} from 'react';
import 'react-virtualized/styles.css';
import VirtualList from 'react-tiny-virtual-list';
let data;
let a=[],i=0;
for (a , i;i<100;++i) a[i]=i;

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
    let tmp, current, top = array.length;
    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp * 2;
    }
    return array;
}

data = shuffle(a);



export default class VirtualScrollerExample extends Component{


    render() {
        return (
            <div style={{height: '100%'}}>
                <VirtualList
                    width='100%'
                    height={window.innerHeight}
                    itemCount={data.length}
                    itemSize={data} // Also supports variable heights (array or function getter)
                    renderItem={({index, style}) =>
                        <div  key={index} style={{height: data[index], border: '1px solid red',boxSizing: 'border-box' , ...style}}>
                            Letter: {data[index]}, Row: #{index}
                        </div>
                    }
                />
            </div>
        )
    }
}
