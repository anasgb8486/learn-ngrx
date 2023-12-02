import { Component } from '@angular/core';
import { Book } from '../store/book';
import { Store } from '@ngrx/store';
import { invokeBooksAPIForSave } from '../store/book.action';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  newBook: Book = {
    id: 0,
    author: '',
    title: '',
    cost: 0,
  };

  constructor(private store: Store) {}

  saveBook() {
    this.store.dispatch(invokeBooksAPIForSave({ payload: this.newBook }));
  }
}
