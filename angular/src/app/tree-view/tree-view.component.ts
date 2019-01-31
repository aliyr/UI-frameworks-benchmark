import {
  Component,
  OnInit
} from '@angular/core';
import {
  nodeChildrenAsMap
} from '@angular/router/src/utils/tree';



@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})

export class TreeViewComponent implements OnInit {

  nodes = [];

  addMore() {

    for (let i = 0; i <= 500; i++) {
      if (this.nodes.length <= 500) {
        this.nodes = [...this.nodes, {
          id: i,
          name: 'parent num' + i
        }];
      }
    }
  }
  options = {};

  constructor() {
  }

  ngOnInit() {
  }
}
