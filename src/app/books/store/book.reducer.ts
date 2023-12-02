import { createReducer, on } from '@ngrx/store';
import { Book } from './book';
import { booksAPiFetchSuccess } from './book.action';

export const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(booksAPiFetchSuccess, (state, { allBooks }) => {
    return allBooks;
  })
);
