import { NgModule } from "@angular/core";
import { RxjsComponent } from './rxjs.component';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubjectdiffComponent } from './subjectdiff/subjectdiff.component';

@NgModule({
    declarations: [
        RxjsComponent,
        SubjectdiffComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RxjsRoutingModule,
        SharedModule
    ],
    exports: []
})
export class RxjsModule {}
