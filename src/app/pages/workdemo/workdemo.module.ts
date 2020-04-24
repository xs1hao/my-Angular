import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkdemoComponent } from './workdemo.component';
import { WorkdemoRoutingModule } from './workdemo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    WorkdemoComponent
  ],
  imports: [
    CommonModule,
    WorkdemoRoutingModule,
    SharedModule
  ],
  exports: []
})
export class WorkdemoModule { }
