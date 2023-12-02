import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectBooks } from '../store/book.selector';
import { invokeBooksAPI } from '../store/book.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books$ = this.store.pipe(select(selectBooks));

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(invokeBooksAPI());
  }
}
