import { NgModule } from "@angular/core";
import { RxjsComponent } from './rxjs.component';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    declarations: [
        RxjsComponent
    ],
    imports: [
        RxjsRoutingModule,
        NgZorroAntdModule
    ],
    exports: [NgZorroAntdModule]
})
export class RxjsModule {}