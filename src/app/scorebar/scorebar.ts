import { Component, inject } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-scorebar',
  imports: [],
  templateUrl: './scorebar.html',
  styleUrl: './scorebar.css',
})
export class Scorebar {

  quiz = inject(QuizService);

}
