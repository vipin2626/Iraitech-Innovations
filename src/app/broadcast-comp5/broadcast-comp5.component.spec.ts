import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastComp5Component } from './broadcast-comp5.component';

describe('BroadcastComp5Component', () => {
  let component: BroadcastComp5Component;
  let fixture: ComponentFixture<BroadcastComp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastComp5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastComp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
