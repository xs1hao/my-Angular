import { NgModule, Optional, SkipSelf  } from "@angular/core";
import { CommonModule, DatePipe } from '@angular/common';
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
        EventEmitService,
        DatePipe, // 官方依赖，
    ]
})
export class SharedModule{
  constructor (@Optional() @SkipSelf() parentModule?: SharedModule) {
    // 检测模块调用；
    
    // if (parentModule) {
    //   throw new Error(
    //     'SharedModule is already loaded. Import it in the AppModule only， 傻逼~ ');
    // }
  }

}
