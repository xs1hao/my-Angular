import { ActionReducerMap } from '@ngrx/store';
import * as filter from './filter.reducer';
import * as counter from './counter.reducer';

export interface EntityState {
    filters: filter.FilterFrameState;
    counters: counter.CounterState;
}

export const reducers: ActionReducerMap<EntityState> = {
    filters: filter.FilterReducer,
    counters: counter.counterReducer
};
