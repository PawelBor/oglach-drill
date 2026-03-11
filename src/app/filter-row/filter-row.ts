import { Component } from '@angular/core';
import { Command } from '../../models/command.model';

@Component({
  selector: 'app-filter-row',
  imports: [],
  templateUrl: './filter-row.html',
  styleUrl: './filter-row.css',
})
export class FilterRow {

  filters: { label: String, value: String }[] = [
    { label: 'All Commands', value: 'all'},
    { label: 'Foot Drill Commands', value: 'foot' },
    { label: 'Arms Drill Commands', value: 'arms' },
  ]

  click(value: String) {
    console.log("clicked ", value)
  }
}
