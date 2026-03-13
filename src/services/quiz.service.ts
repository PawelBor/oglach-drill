import { computed, Injectable, signal } from '@angular/core';
import { Category, Direction, Option, QuizResult } from '../models/command.model';
import { COMMANDS } from '../data/commands.data';

const TOTAL = 15;
const LETTERS_CHOICE = ['A', 'B', 'C', 'D'];
const PRAISE = ['Maith thú!', 'Ar fheabhas!', 'Go hiontach!', 'Togha!', 'Iontach!'];

@Injectable({ providedIn: 'root' })
export class QuizService {
  readonly category = signal<Category>('all');
  readonly score = signal(0);
  readonly streak = signal(0);
  readonly asked = signal(0);

  readonly answered = signal(false);
  readonly isLast      = computed(() => this.asked() >= TOTAL);
  readonly feedback = signal('');
  readonly result    = signal<QuizResult | null>(null);

  readonly options   = signal<Option[]>([]);

  readonly questionText = signal('');
  readonly promptLabel  = signal('');
  readonly showEnd     = computed(() => this.result() !== null);

  readonly direction = signal<Direction>('ga2en');
  readonly badgeLabel  = computed(() =>
    ({ 'ga2en': 'Irish → English', 'en2ga': 'English → Irish', 'random': 'Random' })[this.direction()]
  );

  readonly progressPct = computed(() => `${Math.min(this.asked() / TOTAL * 100, 100)}%`);

  private correctAnswer = '';
  private usedIndices: number[] = [];

  private get pool() {
    const cat = this.category();
    return cat === 'all' ? COMMANDS : COMMANDS.filter(c => c.cat === cat);
  }

  start() {
    this.score.set(0); this.streak.set(0); this.asked.set(0);
    this.answered.set(false); this.feedback.set(''); this.result.set(null);
    this.usedIndices = [];
    this.loadQuestion();
  }

  loadQuestion() {
    if (this.asked() >= TOTAL) {
      this.finish();
      return;
    }

    this.answered.set(false);
    this.feedback.set('');

    const pool = this.pool;
    let available = pool.map((_, i) => i).filter(i => !this.usedIndices.includes(i));
    if (!available.length) { this.usedIndices = []; available = pool.map((_, i) => i); }

    const qi = available[Math.floor(Math.random() * available.length)];
    this.usedIndices.push(qi);
    if (this.usedIndices.length > Math.floor(pool.length / 2)) this.usedIndices.shift();

    const cmd = pool[qi];
    const dir = this.direction() === 'random'
      ? (Math.random() < 0.5 ? 'ga2en' : 'en2ga') : this.direction();

    this.questionText.set(dir === 'ga2en' ? cmd.ga : cmd.en);
    this.correctAnswer = dir === 'ga2en' ? cmd.en : cmd.ga;
    this.promptLabel.set(dir === 'ga2en' ? 'What is the English for:' : 'What is the Irish for:');

    const wrongs = this.shuffle(pool.filter(c => c !== cmd))
      .slice(0, 3).map(c => dir === 'ga2en' ? c.en : c.ga);

    this.options.set(
      this.shuffle([this.correctAnswer, ...wrongs])
        .map((text, i) => ({ letter: LETTERS_CHOICE[i], text, state: 'default' as const }))
    );
    this.asked.update(n => n + 1);
  }

  answer(opt: Option) {
    if (this.answered()) return;
    this.answered.set(true);
    const correct = this.correctAnswer;

    this.options.update(opts => opts.map(o => ({
      ...o,
      state: o.text === correct ? 'correct' : o.text === opt.text ? 'wrong' : o.state
    })));

    if (opt.text === correct) {
      this.score.update(n => n + 1);
      this.streak.update(n => n + 1);
      const msg = PRAISE[Math.floor(Math.random() * PRAISE.length)];
      this.feedback.set(msg + (this.streak() > 2 ? ` 🔥 ${this.streak()} streak!` : ''));
    } else {
      this.streak.set(0);
      this.feedback.set(`Incorrect. The answer was: "${correct}"`);
    }
  }

  toggleDirection() {
    this.direction.update(d => d === 'ga2en' ? 'en2ga' : d === 'en2ga' ? 'random' : 'ga2en');
    if (!this.answered() && this.asked() > 0) {
      this.asked.update(n => n - 1);
      this.usedIndices.pop();
      this.loadQuestion();
    }
  }

  private finish() {
    const pct = Math.round(this.score() / TOTAL * 100);
    const [title, message] =
      pct >= 90 ? ['Ar fheabhas, a Óglach!', 'Outstanding. You know your commands cold.'] :
      pct >= 70 ? ['Maith go leor!',          'Good effort - a few more drills needed.'] :
      pct >= 50 ? ['Leath bealaigh ann!',      'Halfway there. Fall in for another round.'] :
                  ['Ar ais go dtí an rang!',   'More drill needed. Every soldier starts somewhere.'];
    this.result.set({ score: this.score(), total: TOTAL, title, message });
  }

  shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

  setCategory(cat: Category) {
    this.category.set(cat);
    this.start();
  }
}
