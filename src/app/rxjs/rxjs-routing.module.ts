import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from './rxjs.component';

const routes: Routes = [
    { path: '', component: RxjsComponent, data: { title: '发现' }}
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RxjsRoutingModule {}