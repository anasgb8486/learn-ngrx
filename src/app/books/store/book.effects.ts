import { Injectable } from '@angular/core';
import { BooksService } from '../Services/books.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  booksAPiFetchSuccess,
  invokeBooksAPI,
  invokeBooksAPIForNewBookRetrieval,
  invokeBooksAPIForSave,
} from './book.action';
import { map, switchMap } from 'rxjs';

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions, private booksService: BooksService) {}

  loadAllBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeBooksAPI),
      switchMap(() => {
        return this.booksService
          .getBooks()
          .pipe(map((data) => booksAPiFetchSuccess({ allBooks: data })));
      })
    )
  );

  saveNewBook = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeBooksAPIForSave),
      switchMap((action) => {
        return this.booksService
          .saveBook(action.payload)
          .pipe(
            map((data) => invokeBooksAPIForNewBookRetrieval({ response: data }))
          );
      })
    )
  );
}
