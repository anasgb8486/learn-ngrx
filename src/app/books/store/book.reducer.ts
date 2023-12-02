import { createReducer, on } from '@ngrx/store';
import { Book } from './book';
import {
  booksAPiFetchSuccess,
  invokeBooksAPIForNewBookRetrieval,
} from './book.action';

export const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(booksAPiFetchSuccess, (state, { allBooks }) => {
    return allBooks;
  }),
  on(invokeBooksAPIForNewBookRetrieval, (state, { response }) => {
    let newState = [...state];
    newState.unshift(response);
    return newState;
  })
);
