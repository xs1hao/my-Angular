import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPluralComponent } from './ng-plural/ng-plural.component';
import { AngularAttributeComponent } from './angular-attribute.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgComponentOutletComponent } from './ng-component-outlet/ng-component-outlet.component';
import { RouterComponent } from './router/router.component';
import { ChildRouterComponent } from './router/child-router/child-router.component';

@NgModule({
  declarations: [
    NgPluralComponent,
    AngularAttributeComponent,
    NgComponentOutletComponent,
    RouterComponent,
    ChildRouterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class AngularAttributeModule { }
