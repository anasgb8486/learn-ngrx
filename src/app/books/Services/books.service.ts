import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../store/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  url: string = 'http://localhost:3000/books';
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<Book[]>(this.url);
  }

  saveBook(payload: Book) {
    return this.http.post<Book>(this.url, payload);
  }
}
