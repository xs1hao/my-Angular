import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularWorksComponent } from './angular-works.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropComponent } from './drag-drop/drag-drop.component';


@NgModule({
  declarations: [
    AngularWorksComponent,
    DragDropComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    DragDropModule,
  ]
})
export class AngularWorksModule { }
