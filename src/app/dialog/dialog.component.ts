import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IauthorDetail } from '../authorlist/author.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class AuthorDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AuthorDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IauthorDetail
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
