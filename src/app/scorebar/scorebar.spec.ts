import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scorebar } from './scorebar';

describe('Scorebar', () => {
  let component: Scorebar;
  let fixture: ComponentFixture<Scorebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scorebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scorebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
