import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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
export class ContactComponent implements OnInit, OnChanges {
  name: string = '';
  number: string = '';
  form: FormGroup;
  data: IContact = {
    name: this.name,
    mobileNumber: this.number,
  };
  @Input() editIndex: number = -1;
  postData() {
    this.data.name = this.form.value.name;
    this.data.mobileNumber = this.form.value.number;
    if (this.editIndex != -1) this.service.editData(this.editIndex, this.data);
    else this.service.addData(this.data);
    this.editIndex = -1;
  }
  editData() {
    if (this.editIndex != -1) {
      this.data = this.service.getById(this.editIndex);
      let setData = { name: this.data.name, number: this.data.mobileNumber };
      this.form.setValue(setData);
    }
  }
  constructor(public service: ServiceService, private fc: FormBuilder) {
    this.form = this.fc.group({
      name: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.editData();
  }
  ngOnInit(): void {}
}
