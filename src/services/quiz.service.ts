import { Injectable, signal } from '@angular/core';
import { Category } from '../models/command.model';

@Injectable({ providedIn: 'root' })
export class QuizService {
  readonly category = signal<Category>('all');

  setCategory(cat: Category) {
    this.category.set(cat);
    //future: start qz
  }
}
