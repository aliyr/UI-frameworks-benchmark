import {
  Component,
  OnInit
} from '@angular/core';
import { nodeChildrenAsMap } from '@angular/router/src/utils/tree';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  title = 'angular-app-treeview';
  
  nodes = [
    {
      id: 1,
      name: 'root1',
    },
    {
      id: 4,
      name: 'root2',
    },
    { 
      id: 10,
      name: 'root new',
    }
  ];
  
addMore(){
this.nodes.push({ 
  id: 10,
  name: 'root new',
})
alert(this.nodes)
}
  options = {};

  constructor() {
  
  }
  
  ngOnInit() {}

}
