import { Component } from '@angular/core';
import { Ibook } from './book.model';
import { BookService } from './book.service';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {
  books:any;

  constructor(
    private bookSvc : BookService
  ){}

  ngOnInit() {
  this.bookSvc.getBooks(1, 10).subscribe({
    next: (books) => { this.books = books; },
    error: (err) => 
      { 
        console.error('Book API error:', err); 
        this.books = []; 
    }
  });
}

  getBookList() {
  return this.books || [];
}

}
