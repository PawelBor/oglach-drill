export interface Command {
  ga: string;
  en: string;
  cat: 'foot' | 'arms';
}

export interface Option {
  letter: string;
  text: string;
  state: 'default' | 'correct' | 'wrong';
}

export type Category = 'all' | 'foot' | 'arms';
export type Direction = 'ga2en' | 'en2ga' | 'random';

export interface QuizResult {
  score: number;
  total: number;
  title: string;
  message: string;
}
