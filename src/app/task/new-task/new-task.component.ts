import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  @Output() closeButton = new EventEmitter<void>();

  title = '';
  priorities = [
    {
      label: 'level 1',
      value: '1'
    },
    {
      label: 'level 2',
      value: '2'
    },
    {
      label: 'level 3',
      value: '3'
    },
    {
      label: 'level 4',
      value: '4'
    },
  ];

  constructor(public dialogRef: MatDialogRef<NewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.title = this.data.title;
    console.log(JSON.stringify(this.data.task));
  }

  onCloseClick() {
    this.dialogRef.close();
  }
}
