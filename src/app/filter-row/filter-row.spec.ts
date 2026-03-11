import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRow } from './filter-row';

describe('FilterRow', () => {
  let component: FilterRow;
  let fixture: ComponentFixture<FilterRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterRow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
