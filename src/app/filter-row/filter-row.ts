import { Component, inject } from '@angular/core';
import { Category } from '../../models/command.model';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-filter-row',
  imports: [],
  templateUrl: './filter-row.html',
  styleUrl: './filter-row.css',
})
export class FilterRow {

  quiz = inject(QuizService);

  filters: { label: String, value: Category }[] = [
    { label: 'All Commands', value: 'all'},
    { label: 'Foot Drill Commands', value: 'foot' },
    { label: 'Arms Drill Commands', value: 'arms' },
  ]

  click(value: String) {
    console.log("clicked ", value)
  }
}
