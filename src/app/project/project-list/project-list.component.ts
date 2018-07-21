import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from '../../animate/router.anim';
import { listAnimation } from '../../animate/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimation]
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routeAnim') state;

  projects = [
    {
      'id': 1,
      'name': 'test name',
      'desc' : 'test desc',
      'coverImg' : 'assets/img/covers/0.jpg'
    },
    {
      'id': 2,
      'name': 'test name',
      'desc' : 'test desc',
      'coverImg' : 'assets/img/covers/1.jpg'
    }
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: 'New project'}});
    dialogRef.afterClosed().subscribe(result => {
      // tslint:disable-next-line:max-line-length
      this.projects = [... this.projects, {id: 3, name: 'a new project', desc: 'this is a new project', coverImg: 'assets/img/covers/2.jpg'}];
    });
  }

  launchInviteDialog() {
    this.dialog.open(InviteComponent, {});
  }

  launchUpdateDialog() {
    this.dialog.open(NewProjectComponent, {data: {title: 'Edit project'}});
  }
  launchConfirmDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: 'Delete project', content: 'Confirm delete'}});
    dialogRef.afterClosed().subscribe(result => {
      this.projects = this.projects.filter(p => p.id !== project.id);
    });

  }
}
