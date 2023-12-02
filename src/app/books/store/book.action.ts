import { createAction, props } from '@ngrx/store';
import { Book } from './book';

export const invokeBooksAPI = createAction('[BookApi] invoke book api');

export const booksAPiFetchSuccess = createAction(
  '[Books API] fetch data from books api success',
  props<{ allBooks: Book[] }>()
);
