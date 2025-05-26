import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';
import { Iauthor, IauthorDetail } from './author.model';

@Component({
  selector: 'app-authorlist',
  templateUrl: './authorlist.component.html',
  styleUrls: ['./authorlist.component.css']
})
export class AuthorlistComponent implements OnInit {
  authors: Iauthor[] = [];
  displayedColumns: string[] = ['id', 'name'];
  selectedAuthorDetail?: IauthorDetail;

  constructor(private authorService: AuthorService) {}

  ngOnInit() {
    this.authorService.getAuthors().subscribe({
      next: (authors) => this.authors = authors,
      error: (err) => {
        console.error('Author API error:', err);
        this.authors = [];
      }
    });
  }

  showDetails(id:number){
    this.authorService.getAuthorDetail(id).subscribe({
      next: (detail) => this.selectedAuthorDetail = detail,
      error: (error) => {
        console.log(`Error in Fetching detail with id: ${id}`);
        this.selectedAuthorDetail = undefined;
      }
    });
  }

}