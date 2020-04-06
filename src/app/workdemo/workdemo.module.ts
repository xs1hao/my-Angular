import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../components/filter/filter.component';
import { UiComponentsModule } from '../components/ui-components.module';
import { WorkdemoComponent } from './workdemo.component';
import { WorkdemoRoutingModule } from './workdemo-routing.module';



@NgModule({
  declarations: [
    WorkdemoComponent
  ],
  imports: [
    CommonModule,
    WorkdemoRoutingModule,
    UiComponentsModule
  ],
  exports: []
})
export class WorkdemoModule { }
