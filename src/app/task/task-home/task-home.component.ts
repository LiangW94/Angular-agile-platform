import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: 'list1',
      tasks: [
        {
          id: 1,
          desc: 'study',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: 'User1',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'have fun',
          completed: false,
          priority: 2,
          owner: {
            id: 2,
            name: 'User2',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        }
      ]
    },
    {
      id: 2,
      name: 'list2',
      tasks: [
        {
          id: 1,
          desc: 'video games',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: 'User1',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'coding',
          completed: true,
          priority: 2,
          owner: {
            id: 2,
            name: 'User2',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        }
      ]
    }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent);
  }

  launchCopyTaskDialog() {
   const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }
}
