import { NgModule } from "@angular/core";
import { BasicAngularComponent } from './basic.component';
import { BasicPracticeRoutingModule } from './basic-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg/svg.component';
import { FilterPipe } from 'src/app/shared/core/pipes/filter-search.pipe';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        BasicAngularComponent,
        SvgComponent,
        FilterPipe
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        BasicPracticeRoutingModule,
        SharedModule,
        NgZorroAntdModule,
    ],
    exports: [
        SvgComponent,
        FilterPipe
    ]
})
export class BasicPracticeModule {}