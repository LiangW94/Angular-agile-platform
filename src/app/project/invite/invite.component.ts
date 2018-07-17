import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../node_modules/@angular/material';

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

  constructor(public dialogRef: MatDialogRef<InviteComponent>) { }

  onCloseClick() {
    this.dialogRef.close();
  }
}
