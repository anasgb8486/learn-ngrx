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
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/appstate';
import { setApiStatus } from 'src/app/shared/store/app.action';

@Injectable()
export class BookEffects {
  constructor(
    private actions$: Actions,
    private booksService: BooksService,
    private appStore: Store<AppState>
  ) {}

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
        this.appStore.dispatch(
          setApiStatus({ apiStatus: { apiStatus: '', apiResponseMessage: '' } })
        );
        return this.booksService.saveBook(action.payload).pipe(
          map((data) => {
            this.appStore.dispatch(
              setApiStatus({
                apiStatus: { apiStatus: 'success', apiResponseMessage: '' },
              })
            );
            return invokeBooksAPIForNewBookRetrieval({ response: data });
          })
        );
      })
    )
  );
}
