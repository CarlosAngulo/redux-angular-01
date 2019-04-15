import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterIncrement, CounterDecrement } from './counter/counter.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counter: number;

  constructor ( private store: Store<AppState> ) {
    this.store.select('counter').subscribe( counter => this.counter = counter );
  }

  increment() {
    const action = new CounterIncrement();
    this.store.dispatch( action )
  }
  
  decrement() {
    const action = new CounterDecrement();
    this.store.dispatch( action )
  }
}
