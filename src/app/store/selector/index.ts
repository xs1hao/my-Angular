import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../reducer/counter.reducer';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({ count: counterReducer}),
  ]
})
export class AppCounterModule { }
