import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPluralComponent } from './ng-plural/ng-plural.component';
import { AngularAttributeComponent } from './angular-attribute.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgComponentOutletComponent, innerTemplate } from './ng-component-outlet/ng-component-outlet.component';
import { RouterComponent } from './router/router.component';
import { ChildRouterComponent } from './router/child-router/child-router.component';
import { InnerHtmlComponent } from './inner-html/inner-html.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { NzDropDownModule } from 'ng-zorro-antd';
import { Acomponent } from './ng-component-outlet/a.component/a';
import { Bcomponent } from './ng-component-outlet/b.component/b';
import { FunctionComponent } from './function/function.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { BrotherRouterComponent } from './router/brother-router/brother-router.component';

@NgModule({
  declarations: [
    NgPluralComponent,
    AngularAttributeComponent,
    NgComponentOutletComponent,
    RouterComponent,
    ChildRouterComponent,
    InnerHtmlComponent,
    ElementRefComponent,
    // 如果要使用zorro 就要在module里面引入
    Acomponent,
    Bcomponent,
    FunctionComponent,
    NgIfComponent,
    BrotherRouterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    NzDropDownModule
  ]
})
export class AngularAttributeModule { }
