import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Iauthor, IauthorDetail } from './author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(private http: HttpClient) {}

  getAuthors(page: number = 1, pageSize: number = 10): Observable<Iauthor[]> {
    const body = { page, pageSize };
    return this.http.post<any>('/api/Authors/GetAuthors', body)
      .pipe(map(response => response.data));
  }

  getAuthorDetail(id: number): Observable<IauthorDetail> {
  return this.http.get<any>(`/api/Authors/${id}`);
}
}