import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { IContact } from './contact.model';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  todayDate = new Date();
  editIndex = -1;
  editData(editData: number) {
    this.editIndex = editData;
    console.log(this.editIndex);
  }
  constructor() {}
}
