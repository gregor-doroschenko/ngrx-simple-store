import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  INCREMENT = '[Counter] Increment',
  DECREMENT = '[Counter] Decrement',
  RESET = '[Counter] Reset',
  INCREMENT_BY_VALUE = '[Counter] Increment by value'
}

export class Increment implements Action {
  readonly type = CounterActionTypes.INCREMENT;
}

export class Decrement implements Action {
  readonly type = CounterActionTypes.DECREMENT;
}

export class Reset implements Action {
  readonly type = CounterActionTypes.RESET;

  constructor(public payload: number) {}
}

export class IncrementByValue implements Action {
  readonly type = CounterActionTypes.INCREMENT_BY_VALUE;

  constructor(public payload: number) {}
}

export type CounterActionsUnion = Increment | Decrement | Reset | IncrementByValue;
