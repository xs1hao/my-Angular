import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CounterState } from '../reducer/counter.reducer';
import { pingjie } from 'src/app/utlis/sting';

const selectCounterStates = (state: CounterState) => state;


export const getInitState = createSelector(selectCounterStates,(state:CounterState) => state.count.count);
export const getIndexConter = createSelector(selectCounterStates,(state:CounterState) => pingjie(state.count.type));

