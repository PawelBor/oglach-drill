import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillQuiz } from './drill-quiz';

describe('DrillQuiz', () => {
  let component: DrillQuiz;
  let fixture: ComponentFixture<DrillQuiz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrillQuiz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrillQuiz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
