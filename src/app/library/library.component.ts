import { Component } from '@angular/core';
import { Ibook } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {
  books: Ibook[] = [];
  titleFilter: string = '';
  priceFilter: number | null = null;
  authorFilter: string = '';

  constructor(private bookSvc: BookService) {}

  ngOnInit() {
    this.fetchBooks();
  }

  // Called on every filter change for live filtering
  onFilterChange(title: string, author: string, price: number | null) {
    this.titleFilter = title;
    this.authorFilter = author;
    this.priceFilter = price !== null && price !== undefined && price !== 0 ? Number(price) : null;
    this.fetchBooks();
  }

  // Called on form submit (Search button)
  onSearch() {
    this.fetchBooks();
  }

  fetchBooks() {
    this.bookSvc.getBooks(
      1,
      10,
      this.titleFilter,
      this.priceFilter !== null ? this.priceFilter : undefined,
      this.authorFilter
    ).subscribe({
      next: (books) => { this.books = books; },
      error: (err) => { 
        console.error('Book API error:', err); 
        this.books = []; 
      }
    });
  }

  getBookList() {
    return this.books || [];
  }
}