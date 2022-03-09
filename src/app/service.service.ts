import { Injectable } from '@angular/core';
import { IContact } from './contact.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  data: IContact[] = [
    {
      name: 'user1',
      mobileNumber: '9658246900',
    },
    {
      name: 'user2',
      mobileNumber: '1234567890',
    },
  ];
  getById(id: number) {
    return this.data[id];
  }
  getData() {
    return this.data;
  }
  editData(id: number, data: IContact) {
    this.data[id] = data;
  }
  addData(data: IContact) {
    this.data.push(data);
  }
  deleteData(clearAll: boolean, i: number) {
    if (clearAll) {
      this.data.splice(0, this.data.length);
    } else {
      this.data.splice(i, 1);
    }
  }
  constructor() {}
}
