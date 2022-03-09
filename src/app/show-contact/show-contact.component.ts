import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IContact } from '../contact.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.css'],
})
export class ShowContactComponent implements OnInit {
  data: IContact[] = [];
  single: IContact;
  @Output() edit = new EventEmitter<IContact>();
  loadData() {
    this.data = this.service.getData();
  }
  editData(i: number) {
    this.edit.emit(this.single);
  }
  deleteData(clearAll: boolean, i: number) {
    this.service.deleteData(clearAll, i);
  }
  constructor(public service: ServiceService) {
    this.loadData();
    this.single = this.data[0];
  }

  ngOnInit(): void {}
}
