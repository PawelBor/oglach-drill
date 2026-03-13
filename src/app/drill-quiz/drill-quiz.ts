import { Component, inject, OnInit } from '@angular/core';
import { FilterRow } from '../filter-row/filter-row';
import { Scorebar } from '../scorebar/scorebar';
import { QuizService } from '../../services/quiz.service';
import { QuizCard } from '../quiz-card/quiz-card';
import { EndScreen } from '../end-screen/end-screen';

@Component({
  selector: 'app-drill-quiz',
  imports: [FilterRow, Scorebar, QuizCard, EndScreen],
  templateUrl: './drill-quiz.html',
  styleUrl: './drill-quiz.css',
})
export class DrillQuiz implements OnInit{

  quiz = inject(QuizService);

  ngOnInit() {
    this.quiz.start();
  }

}
