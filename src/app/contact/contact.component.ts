import { Component, OnInit } from '@angular/core';
import { IContact } from '../contact.model';
import { ServiceService } from '../service.service';
import {
  ReactiveFormsModule,
  FormGroup,
  NgForm,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  name: string = '';
  number: string = '';
  form: FormGroup;
  data: IContact = {
    name: this.name,
    mobileNumber: this.number,
  };
  postData() {
    this.data.name = this.form.value.name;
    this.data.mobileNumber = this.form.value.number;
    this.service.addData(this.data);
  }
  editData(i: number) {
    this.data = this.service.getById(i);
    let setData = { name: this.data.name, number: this.data.mobileNumber };
    this.form.setValue(setData);
  }
  constructor(public service: ServiceService, private fc: FormBuilder) {
    this.form = this.fc.group({
      name: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
}
