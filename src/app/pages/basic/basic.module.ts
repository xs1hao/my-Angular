import { NgModule } from "@angular/core";
import { BasicAngularComponent } from './basic.component';
import { BasicPracticeRoutingModule } from './basic-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg/svg.component';
import { FilterPipe } from 'src/app/shared/core/pipes/filter-search.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestComponent } from './test/test.component';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPipeFunctionModule } from 'ngx-pipe-function';

@NgModule({
    declarations: [
        BasicAngularComponent,
        SvgComponent,
        FilterPipe,
        TestComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        BasicPracticeRoutingModule,
        SharedModule,
        OrderModule,
        NgxPipeFunctionModule
    ],
    exports: [
        SvgComponent,
        FilterPipe,
        TestComponent
    ]
})
export class BasicPracticeModule {}
