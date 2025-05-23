import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Ibook } from './book.model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http:HttpClient) { }

  getBooks(page: number = 1, pageSize: number = 10, title?: string, price?: number, author?: string): Observable<Ibook[]> {
  const body: any = {
    page,
    pageSize,
    title,
    author
  };
    if (price !== undefined && price !== null) {
      body.price = price;
    }
    return this.http.post<any>('/api/Books/GetBookDetails', body)
      .pipe(
        map(response => response.data)
      );
  }
}
