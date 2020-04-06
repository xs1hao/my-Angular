import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'style',
    loadChildren: () => import('./core/comom.module').then(mod => mod.CommonModule)
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then(mod => mod.RxjsModule)
  },
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then(mod => mod.CounterModule)
  },
  {
    path: 'basic/:id',
    loadChildren: () => import('./basic/basic.module').then(mod => mod.BasicPracticeModule)
  },
  {
    path: 'workdemo',
    loadChildren: () => import('./workdemo/workdemo.module').then(mod => mod.WorkdemoModule)
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
