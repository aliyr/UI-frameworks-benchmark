import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {ViewportRuler, ScrollDispatcher, ScrollDispatchModule} from '@angular/cdk/scrolling';
@Component({
  selector: 'app-virtual-scroller',
  templateUrl: './virtual-scroller.component.html',
  styleUrls: ['./virtual-scroller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollerComponent implements OnInit {
  fixedSizeData = Array(10000).fill(30);
  constructor() { }

  ngOnInit() {
  }
}
