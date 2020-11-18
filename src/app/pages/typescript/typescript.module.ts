import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypescriptComponent } from './typescript.component';
import { TypescriptRoutingModule } from './typescript-routing.module';



@NgModule({
  declarations: [
    TypescriptComponent
  ],
  imports: [
    CommonModule,
    TypescriptRoutingModule
  ]
})
export class TypescriptModule { }
