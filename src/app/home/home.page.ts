import { Component, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

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
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';

  @ViewChild(IonDatetime) datetime: IonDatetime;

  constructor() {
    this.setToday();
  }

  setToday() {
    this.formattedString = format(
      parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'),
      'HH:mm, MMM d, yyyy'
    );
  }

  dateChanged(value) {
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'HH:mm, MMM dd yyyy');
    this.showPicker = false;
  }

  close() {
    this.datetime.cancel(true);
  }

  select() {
    this.datetime.confirm(true);
  }
}
