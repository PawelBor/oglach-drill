import { Component, inject } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-card',
  imports: [],
  templateUrl: './quiz-card.html',
  styleUrl: './quiz-card.css',
})
export class QuizCard {
  quiz = inject(QuizService);

  temp(){
    console.log('click')
  }
}
