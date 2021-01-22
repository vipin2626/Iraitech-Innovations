import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMissingNumberComponent } from './find-missing-number.component';

describe('FindMissingNumberComponent', () => {
  let component: FindMissingNumberComponent;
  let fixture: ComponentFixture<FindMissingNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMissingNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMissingNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
