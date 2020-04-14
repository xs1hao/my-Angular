import { NgModule } from "@angular/core";
import { BasicAngularComponent } from './basic.component';
import { BasicPracticeRoutingModule } from './basic-routing.module';
import { UiComponentsModule } from '../components/ui-components.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg/svg.component';
import { FilterPipe } from '../core/pipes/filter-search.pipe';

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
        UiComponentsModule,
        NgZorroAntdModule,
    ],
    exports: [
        SvgComponent,
        FilterPipe
    ]
})
export class BasicPracticeModule {}