import { AuthorService } from './author.service';
import { Iauthor, IauthorDetail } from './author.model';
import {ChangeDetectionStrategy, Component, inject, signal, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AuthorDetailDialogComponent } from '../dialog/dialog.component'; 


@Component({
  selector: 'app-authorlist',
  templateUrl: './authorlist.component.html',
  styleUrls: ['./authorlist.component.css']
})

export class AuthorlistComponent implements OnInit {
  authors: Iauthor[] = [];
  displayedColumns: string[] = ['id', 'name','details'];
  selectedAuthorDetail?: IauthorDetail;

  constructor(private authorService: AuthorService, private dialog: MatDialog) {}

  ngOnInit() {
    this.authorService.getAuthors().subscribe({
      next: (authors) => this.authors = authors,
      error: (err) => {
        console.error('Author API error:', err);
        this.authors = [];
      }
    });
  }

  showDetails(id: number) {
    this.authorService.getAuthorDetail(id).subscribe({
      next: (detail) => {
        this.dialog.open(AuthorDetailDialogComponent, {
          data: detail
        });
      },
      error: (error) => {
        console.log(`Error in Fetching detail with id: ${id}`);
      }
    });
  }


}