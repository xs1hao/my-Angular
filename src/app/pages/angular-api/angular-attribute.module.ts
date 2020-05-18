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
import { InnerHtmlComponent } from './inner-html/inner-html.component';
import { ElementRefComponent } from './element-ref/element-ref.component';

@NgModule({
  declarations: [
    NgPluralComponent,
    AngularAttributeComponent,
    NgComponentOutletComponent,
    RouterComponent,
    ChildRouterComponent,
    InnerHtmlComponent,
    ElementRefComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class AngularAttributeModule { }
