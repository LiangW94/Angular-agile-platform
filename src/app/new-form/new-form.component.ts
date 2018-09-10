import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {

  newForm: FormGroup;
  public showValue;


  constructor(public formbuilder: FormBuilder) { }

  ngOnInit() {
    this.newForm = this.formbuilder.group({
      name: [],
      email: [],
      address: []
    });

  const name = this.newForm.get('name');
  const email = this.newForm.get('email');
  const address = this.newForm.get('address');

  const name$ = name.valueChanges;
  const email$ = email.valueChanges;
  const address$ = address.valueChanges;

  // name$.subscribe(x => {
  // });
  }


  public onSubmit() {
    this.showValue = this.newForm.controls;
    console.log(this.newForm);
  }
}
