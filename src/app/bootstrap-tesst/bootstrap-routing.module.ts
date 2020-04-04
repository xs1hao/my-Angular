import { Routes, RouterModule } from "@angular/router";
import { BootstrapTesstComponent } from './bootstrap-tesst.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: BootstrapTesstComponent, data: { title: '斯琴高丽' }}
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BootstrapRoutingModule {}