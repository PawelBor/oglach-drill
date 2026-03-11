import { Component, signal } from '@angular/core';
import { DrillQuiz } from './drill-quiz/drill-quiz';

@Component({
  selector: 'app-root',
  imports: [DrillQuiz],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('oglach-drill');
}
