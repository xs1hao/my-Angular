import { NgModule  } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NzSelectModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { ZorroComponent } from './components/zorro/carousle/zorro.component';
import { ButtonComponent } from './components/zorro/button/button.component';
import { TestComponent } from './components/test/test.component';
import { CodeToggleComponent } from './components/code-toggle/code-toggle.component';
import { FilterComponent } from './components/filter/filter.component';
import { ClickoutsideDirective } from './core/directives/clickoutside.directive';
import { EventEmitService } from './core/eventEmit/eventEmit.service';
import { SelectComponent } from './components/select/select.component';
import { HtmlPipe } from './core/pipes/html-piple';
import { DatePipesPipe } from './core/pipes/date-pipe.pipe';
// import { OrderByPipe } from './core/pipes/order-by.pipe';

@NgModule({
    declarations:[
        ZorroComponent,
        TestComponent,
        ButtonComponent,
        FilterComponent,
        CodeToggleComponent,
        ClickoutsideDirective,
        SelectComponent,
        HtmlPipe,
        DatePipesPipe,
        // OrderByPipe
    ],
    imports:[
        CommonModule,
        FormsModule,
        NzSelectModule,
        NgZorroAntdModule
    ],
    exports:[
        ZorroComponent,
        TestComponent,
        ButtonComponent,
        SelectComponent,
        FilterComponent,
        CodeToggleComponent,
        ClickoutsideDirective,
        HtmlPipe,
        DatePipesPipe,
        // OrderByPipe
    ],
    providers: [
        EventEmitService
    ]
})
export class SharedModule{}
