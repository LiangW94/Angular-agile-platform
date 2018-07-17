import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    public dialogRef: MatDialogRef<NewProjectComponent>) { }

  title = '';
  ngOnInit() {
    this.title = this.data.title;
  }
  onCloseClick() {
    this.dialogRef.close();
  }
}
