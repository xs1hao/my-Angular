import { NgModule } from "@angular/core";
import { BasicAngularComponent } from './basic.component';
import { BasicPracticeRoutingModule } from './basic-routing.module';
import { UiComponentsModule } from '../components/ui-components.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg/svg.component';

@NgModule({
    declarations: [
        BasicAngularComponent,
        SvgComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        BasicPracticeRoutingModule,
        UiComponentsModule,
        NgZorroAntdModule
    ],
    exports: [
        SvgComponent
    ]
})
export class BasicPracticeModule {}