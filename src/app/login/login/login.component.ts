import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  quote: any = '';
  constructor(private fb: FormBuilder, private quoteService$: QuoteService) {
    this.quoteService$
    .getQuote()
    .subscribe(val => console.log(val));
  }

  ngOnInit() {
    this.form =  this.fb.group({
      email: [''],
      password: ['']
    });

  }
}
