import { Component, inject } from '@angular/core';
import { FilterRow } from '../filter-row/filter-row';
import { Scorebar } from '../scorebar/scorebar';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-drill-quiz',
  imports: [FilterRow, Scorebar],
  templateUrl: './drill-quiz.html',
  styleUrl: './drill-quiz.css',
})
export class DrillQuiz {

  quiz = inject(QuizService);

}
