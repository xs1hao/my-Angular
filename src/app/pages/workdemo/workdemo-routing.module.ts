import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { WorkdemoComponent } from './workdemo.component';

const routes: Routes = [
    { path: '', component: WorkdemoComponent, data: { title: '发现' }}
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkdemoRoutingModule {}