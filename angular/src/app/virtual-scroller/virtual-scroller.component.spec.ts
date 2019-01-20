import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollerComponent } from './virtual-scroller.component';

describe('VirtualScrollerComponent', () => {
  let component: VirtualScrollerComponent;
  let fixture: ComponentFixture<VirtualScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
