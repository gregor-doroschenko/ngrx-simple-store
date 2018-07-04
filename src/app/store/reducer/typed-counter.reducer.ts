import { CounterActionsUnion, CounterActionTypes } from '../actions/counter.actions';

const initialState = 0;

export function typedCounterReducer(state: number = initialState, action: CounterActionsUnion) {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return state + 1;

    case CounterActionTypes.DECREMENT:
      return state - 1;

    case CounterActionTypes.RESET:
      return action.payload;

    case CounterActionTypes.INCREMENT_BY_VALUE:
      return state + action.payload;

    default:
      return state;
  }
}
