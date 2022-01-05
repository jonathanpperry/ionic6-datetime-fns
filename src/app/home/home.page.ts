import { Component } from '@angular/core';

@Component({
  selector: 'app-hoame',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  modes = [
    'date',
    'date-time',
    'month',
    'month-year',
    'time',
    'time-date',
    'year',
  ];

  selectedMode = 'date';
  showPicker = false;

  constructor() {}
}
