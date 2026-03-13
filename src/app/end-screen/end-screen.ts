import { Component, inject } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-end-screen',
  imports: [],
  templateUrl: './end-screen.html',
  styleUrl: './end-screen.css',
})
export class EndScreen {

  quiz = inject(QuizService);

}
