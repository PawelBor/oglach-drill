import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCard } from './quiz-card';

describe('QuizCard', () => {
  let component: QuizCard;
  let fixture: ComponentFixture<QuizCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
