import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { BasicAngularComponent } from './basic.component';

const routes: Routes = [
    { path: '', component: BasicAngularComponent, data: { title: 'Angular基础练习' }}
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BasicPracticeRoutingModule {}