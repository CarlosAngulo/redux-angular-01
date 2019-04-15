import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { CounterMultiply, CounterDivide } from '../counter.actions';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styles: []
})
export class ChildrenComponent implements OnInit {

  counter: number;
  
  constructor( private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('counter')
    .subscribe( (counter) => this.counter = counter );
  }

  multiply() {
    const action = new CounterMultiply(2);
    this.store.dispatch(action);
  }
  
  divide() {
    const action = new CounterDivide(2);
    this.store.dispatch(action);
  }

}
