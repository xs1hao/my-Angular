import { createSelector, Store } from '@ngrx/store';
import { FilterFrameState } from '../reducer/filter.reducer';
import { Injectable } from '@angular/core';

const selectFilterStates = (state: FilterFrameState) => state;

// export const getFilterListShow = createSelector(selectFilterStates,(state:FilterFrameState) => state.filterListShow);
// 这里的放回方式有 如上下两种，可以直接返回具体的值，也可以把state返回，根据不同的返回情况，在数据渲染文件中采用不容的接收方式；
// 直接返回一个state ，这个state包含了所有store中的信息 ；
export const getFilterListShow = createSelector(selectFilterStates,(state:FilterFrameState) => state);
export const getFilterPanelShow = createSelector(selectFilterStates,(state:FilterFrameState) => state.filterPanelShow);

@Injectable({
    providedIn: 'any'
})
export class FilterSelectors {
  constructor(private store: Store<FilterFrameState>) {}
  // selectors$
  filterListShow$ = this.store.select(getFilterListShow);
  filterPanelShow$ = this.store.select(getFilterPanelShow);
}