import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicAngularComponent } from './pages/basic/basic.component';
import { TestComponent } from './pages/basic/test/test.component';

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
