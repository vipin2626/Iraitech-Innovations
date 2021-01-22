import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastComp2Component } from './broadcast-comp2.component';

describe('BroadcastComp2Component', () => {
  let component: BroadcastComp2Component;
  let fixture: ComponentFixture<BroadcastComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastComp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
