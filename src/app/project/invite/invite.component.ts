import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {


  items = [
    {
      id: 1,
      name: 'Apple',
    },
    {
      id: 2,
      name: 'Samsung',
    },
    {
      id: 3,
      name: 'Sony',
    }
  ];

  ngOnInit() {
  }

  constructor() { }

}
