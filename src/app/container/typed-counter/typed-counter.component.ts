import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from '../../store/actions/counter.actions';

@Component({
  selector: 'app-typed-counter',
  templateUrl: './typed-counter.component.html',
  styleUrls: ['./typed-counter.component.css']
})
export class TypedCounterComponent {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.pipe(select('typedCount'));
  }

  increment() {
    this.store.dispatch(new CounterActions.Increment());
  }

  decrement() {
    this.store.dispatch(new CounterActions.Decrement());
  }

  reset() {
    this.store.dispatch(new CounterActions.Reset(0));
  }

  incrementByValue() {
    this.store.dispatch(new CounterActions.IncrementByValue(10));
  }

}
