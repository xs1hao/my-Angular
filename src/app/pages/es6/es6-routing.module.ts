import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { Es6Component } from './es6.component';

const routes: Routes = [
    { path: '', component: Es6Component, data: { title: '发现' }}
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Es6RoutingModule {}
