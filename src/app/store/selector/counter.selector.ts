import { createSelector, createFeatureSelector, Store } from '@ngrx/store';
import { CounterState } from '../reducer/counter.reducer';
import { Injectable } from '@angular/core';
import { pingjie } from 'src/app/shared/core/utlis/sting';

const selectCounterStates = (state: CounterState) => state;

export const getInitState = createSelector(selectCounterStates,(state:CounterState) => state);
export const getIndexConter = createSelector(selectCounterStates,(state:CounterState) => pingjie(state));




@Injectable({
    providedIn: 'any'
})
export class CounterSelectors {
  constructor(private store: Store<CounterState>) {}
  // selectors$
  counter$ = this.store.select(getInitState);
  counterIndex$ = this.store.select(getIndexConter);
}