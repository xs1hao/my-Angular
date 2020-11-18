import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Es6Component } from './es6.component';
import { Es6RoutingModule } from './es6-routing.module';



@NgModule({
  declarations: [
    Es6Component
  ],
  imports: [
    CommonModule,
    Es6RoutingModule
  ]
})
export class Es6Module { }
