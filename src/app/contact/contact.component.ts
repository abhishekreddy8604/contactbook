import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IContact } from '../contact.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  name: string = '';
  number: string = '';
  data: IContact = {
    name: this.name,
    mobileNumber: this.number,
  };
  postData(f: NgForm) {
    console.log(f);
    //   this.data.name = f.name;
    // this.data.mobileNumber = f.number;
    //this.service.addData(this.data);
    // this.name = '';
    // this.number = '';
  }
  constructor(public service: ServiceService) {}

  ngOnInit(): void {}
}
