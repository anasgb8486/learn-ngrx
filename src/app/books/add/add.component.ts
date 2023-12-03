import { Component } from '@angular/core';
import { Book } from '../store/book';
import { Store, select } from '@ngrx/store';
import { invokeBooksAPIForSave } from '../store/book.action';
import { AppState } from 'src/app/shared/store/appstate';
import { appSelector } from 'src/app/shared/store/app.selector';
import { Router } from '@angular/router';
import { setApiStatus } from 'src/app/shared/store/app.action';

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

  constructor(
    private store: Store,
    private appStore: Store<AppState>,
    private router: Router
  ) {}

  saveBook() {
    this.store.dispatch(invokeBooksAPIForSave({ payload: this.newBook }));
    let appState$ = this.appStore.pipe(select(appSelector));
    appState$.subscribe((data) => {
      if (data.apiStatus === 'success') {
        this.store.dispatch(
          setApiStatus({ apiStatus: { apiStatus: '', apiResponseMessage: '' } })
        );
        this.router.navigate(['/']);
      }
    });
  }
}
