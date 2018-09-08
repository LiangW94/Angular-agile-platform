import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRight } from '../../animate/router.anim';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [ slideToRight ]
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routeAnim') state;

  lists = [
    {
      id: 1,
      name: 'list1',
      order: 1,
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
      order: 2,
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
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: 'New task'}});
  }

  launchCopyTaskDialog() {
   const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: 'Update task', task: task}});
  }
  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: 'Delete task', content: 'Confirm delete task?'}});
  }
  launchEditTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: 'Update list name'}});
  }
  openNewListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: 'New Task list'}});
  }

  handleMove(srcData, list) {
    switch (srcData.tag) {
      case 'task-item':
        console.log('item');
        break;
      case 'task-list':
        console.log('list');
        const srcList = srcData.data;
        const tempOrder = srcList.order;
        srcList.order = list.order;
        list.order = tempOrder;
        break;
      default:
        break;
    }
  }

  handleQuickTask(desc: string) {
    console.log(desc);
  }
}
