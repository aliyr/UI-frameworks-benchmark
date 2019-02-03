import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechboxmoduleComponent } from './chechboxmodule.component';

describe('ChechboxmoduleComponent', () => {
  let component: ChechboxmoduleComponent;
  let fixture: ComponentFixture<ChechboxmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChechboxmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChechboxmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
