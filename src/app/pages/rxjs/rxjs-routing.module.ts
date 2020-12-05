import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import { SubjectdiffComponent } from './subjectdiff/subjectdiff.component';

const routes: Routes = [
    { path: '', component: RxjsComponent,
    children: [
      {path:'subject', component: SubjectdiffComponent}
    ],
    data: { title: '发现' }}
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RxjsRoutingModule {}
