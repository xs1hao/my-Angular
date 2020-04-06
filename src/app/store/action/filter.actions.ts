

import { createAction} from '@ngrx/store';

export const InputClick = createAction('[Filter Component] InputClick');//点击了input框
export const InputContentClick = createAction('[Filter Component] InputContentClick');
export const InputOutsideClick = createAction('[Filter Component] InputOutsideClick');