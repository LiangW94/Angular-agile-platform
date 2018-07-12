import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
