import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastComp4Component } from './broadcast-comp4.component';

describe('BroadcastComp4Component', () => {
  let component: BroadcastComp4Component;
  let fixture: ComponentFixture<BroadcastComp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastComp4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastComp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
