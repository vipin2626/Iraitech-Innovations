import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastQuestionFourComponent } from './broadcast-question-four.component';

describe('BroadcastQuestionFourComponent', () => {
  let component: BroadcastQuestionFourComponent;
  let fixture: ComponentFixture<BroadcastQuestionFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastQuestionFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastQuestionFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
