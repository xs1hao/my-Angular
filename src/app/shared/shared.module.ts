import { NgModule  } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { ZorroComponent } from './components/zorro/carousle/zorro.component';
import { ButtonComponent } from './components/zorro/button/button.component';
import { TestComponent } from './components/test/test.component';
import { CodeToggleComponent } from './components/code-toggle/code-toggle.component';
import { FilterComponent } from './components/filter/filter.component';
import { ClickoutsideDirective } from './core/directives/clickoutside.directive';
import { EventEmitService } from './core/eventEmit/eventEmit.service';

@NgModule({
    declarations:[
        ZorroComponent,
        TestComponent,
        ButtonComponent,
        FilterComponent,
        CodeToggleComponent,
        ClickoutsideDirective
    ],
    imports:[
        CommonModule,
        FormsModule,
        NgZorroAntdModule
    ],
    exports:[
        ZorroComponent,
        TestComponent,
        ButtonComponent,
        FilterComponent,
        CodeToggleComponent,
        ClickoutsideDirective
    ],
    providers: [
        EventEmitService
    ]
})
export class SharedModule{}