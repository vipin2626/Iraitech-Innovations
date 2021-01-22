import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastComp3Component } from './broadcast-comp3.component';

describe('BroadcastComp3Component', () => {
  let component: BroadcastComp3Component;
  let fixture: ComponentFixture<BroadcastComp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastComp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastComp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
