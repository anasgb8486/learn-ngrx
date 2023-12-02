import { createAction, props } from '@ngrx/store';
import { Book } from './book';

export const invokeBooksAPI = createAction('[BookApi] invoke book api');

export const booksAPiFetchSuccess = createAction(
  '[Books API] fetch data from books api success',
  props<{ allBooks: Book[] }>()
);

export const invokeBooksAPIForSave = createAction(
  '[Book API] invoke book api to save a new book',
  props<{ payload: Book }>()
);

export const invokeBooksAPIForNewBookRetrieval = createAction(
  '[Book API] invoke book api to get new created book',
  props<{ response: Book }>()
);
