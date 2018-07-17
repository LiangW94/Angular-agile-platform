import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      'name': 'test name',
      'desc' : 'test desc',
      'coverImg' : 'assets/img/covers/0.jpg'
    },
    {
      'name': 'test name',
      'desc' : 'test desc',
      'coverImg' : 'assets/img/covers/1.jpg'
    }
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    this.dialog.open(NewProjectComponent, {data: {title: 'New project'}});
  }

  launchInviteDialog() {
    this.dialog.open(InviteComponent, {});
  }

  launchUpdateDialog() {
    this.dialog.open(NewProjectComponent, {data: {title: 'Edit project'}});
  }
  launchConfirmDialog() {
    this.dialog.open(ConfirmDialogComponent, {data: {title: 'Delete project', content: 'Confirm delete'}});
  }
}
