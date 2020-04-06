import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { ClickoutsideDirective } from 'src/app/core/directives/clickoutside.directive';



@NgModule({
  declarations: [
    FilterComponent,
    ClickoutsideDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FilterComponent,
    ClickoutsideDirective
  ]
})
export class FilterModule { }
