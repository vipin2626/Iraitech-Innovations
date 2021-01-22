import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastComp1Component } from './broadcast-comp1.component';

describe('BroadcastComp1Component', () => {
  let component: BroadcastComp1Component;
  let fixture: ComponentFixture<BroadcastComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastComp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
