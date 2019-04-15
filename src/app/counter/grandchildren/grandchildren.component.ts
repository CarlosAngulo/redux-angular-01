import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { CounterReset } from '../counter.actions';

@Component({
  selector: 'app-grandchildren',
  templateUrl: './grandchildren.component.html',
  styles: []
})
export class GrandchildrenComponent implements OnInit {

  counter: number;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.select('counter').subscribe( counter => this.counter = counter);
  }

  reset() {
    const action = new CounterReset();
    this.store.dispatch(action);
  }

}
