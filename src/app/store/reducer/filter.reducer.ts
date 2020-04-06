
import { Action, createReducer, on, ActionReducer, MetaReducer } from '@ngrx/store';
import * as FilterActions from '../action/index';


export interface FilterFrameState {
    filterListShow: boolean;
    filterPanelShow: boolean;
}

export const initialState: FilterFrameState = {
    filterListShow: false,
    filterPanelShow: false
}

const _filterReducer = createReducer(
    initialState,
    on(FilterActions.InputClick, state => ({ ...state, filterListShow: true })),
    on(FilterActions.InputContentClick, state => ({ ...state })),
    on(FilterActions.InputOutsideClick, state => ({ ...state }))
)

export function FilterReducer(state, action) {
    console.log('filterReducer中:', state);
    return _filterReducer(state, action);
}