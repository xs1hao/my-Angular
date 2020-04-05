import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment',props<{count:number}>());
export const decrement = createAction('[Counter Component] Decrement',props<{count:number}>());
export const reset = createAction('[Counter Component] Reset0',props<{count:number}>());