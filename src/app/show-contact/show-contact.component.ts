import { Component, OnInit } from '@angular/core';
import { IContact } from '../contact.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.css'],
})
export class ShowContactComponent implements OnInit {
  data: IContact[] = [];
  loadData() {
    this.data = this.service.getData();
  }
  editData(i: number) {
    //  this.service.editData();
  }
  deleteData(clearAll: boolean, i: number) {
    this.service.deleteData(clearAll, i);
  }
  constructor(public service: ServiceService) {
    this.loadData();
  }

  ngOnInit(): void {}
}
