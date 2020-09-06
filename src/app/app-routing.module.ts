import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicAngularComponent } from './pages/basic/basic.component';
import { TestComponent } from './pages/basic/test/test.component';
import { AngularAttributeComponent } from './pages/angular-api/angular-attribute.component';
import { NgPluralComponent } from './pages/angular-api/ng-plural/ng-plural.component';
import { NgComponentOutletComponent } from './pages/angular-api/ng-component-outlet/ng-component-outlet.component';
import { InnerHtmlComponent } from './pages/angular-api/inner-html/inner-html.component';
import { ElementRefComponent } from './pages/angular-api/element-ref/element-ref.component';
import { ChildRouterComponent } from './pages/angular-api/router/child-router/child-router.component';
import { RouterComponent } from './pages/angular-api/router/router.component';
import { AngularWorksComponent } from './pages/angular-works/angular-works.component';
import { pathToFileURL } from 'url';
import { DragDropComponent } from './pages/angular-works/drag-drop/drag-drop.component';
import { FunctionComponent } from './pages/angular-api/function/function.component';
import { CustomModelComponent } from './pages/angular-works/custom-model/custom-model.component';
import { NgIfComponent } from './pages/angular-api/ng-if/ng-if.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'style',
    loadChildren: () => import('./pages/bootstrap/bootstrap.module').then(mod => mod.BootstrapModule)
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./pages/rxjs/rxjs.module').then(mod => mod.RxjsModule)
  },
  {
    path: 'counter',
    loadChildren: () => import('./pages/counter/counter.module').then(mod => mod.CounterModule)
  },
  {
    path: 'basic/:id',
    component: BasicAngularComponent,
    children: [
      { path: 'basic_test/:idS', component: TestComponent}
    ]
    // loadChildren: () => import('./basic/basic.module').then(mod => mod.BasicPracticeModule)
  },
  {
    path: 'angular-attr',//angular API
    component: AngularAttributeComponent,
      children: [
        {path: 'NgPlural', component: NgPluralComponent},
        {path: 'NgComponentOutlet', component: NgComponentOutletComponent},
        {path: 'innerHtml', component: InnerHtmlComponent},
        {path: 'elementRef', component: ElementRefComponent},
        {path: 'Router', component: RouterComponent,
          children : [
            {path: 'child', component: ChildRouterComponent}
          ]
        },
        {path: 'function', component: FunctionComponent},
        {path: 'ngIf', component: NgIfComponent}
      ]
  },
  {
    path: 'angular-works',//angular案例
    component: AngularWorksComponent,
    children: [
      {path: 'DragDropModule', component: DragDropComponent},
      {path: 'CustomModel', component: CustomModelComponent}
    ]
  },
  {
    path: 'workdemo',
    loadChildren: () => import('./pages/workdemo/workdemo.module').then(mod => mod.WorkdemoModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
// forRoot() 方法会提供路由所需的服务提供商和指令，还会基于浏览器的当前 URL 执行首次导航。
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
