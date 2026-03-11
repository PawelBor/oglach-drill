import { computed, Injectable, signal } from '@angular/core';
import { Category } from '../models/command.model';

const TOTAL = 15;

@Injectable({ providedIn: 'root' })
export class QuizService {
  readonly category = signal<Category>('all');
  readonly score = signal(0);
  readonly streak = signal(0);
  readonly asked = signal(0);

  //temp progress
  readonly progressPct = computed(() => `${30}%`);

  setCategory(cat: Category) {
    this.category.set(cat);
    //future: start qz
  }
}
