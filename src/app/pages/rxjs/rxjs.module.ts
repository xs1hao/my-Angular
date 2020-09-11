import { NgModule } from "@angular/core";
import { RxjsComponent } from './rxjs.component';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        RxjsComponent
    ],
    imports: [
        RxjsRoutingModule,
        NgZorroAntdModule,
        SharedModule
    ],
    exports: [NgZorroAntdModule]
})
export class RxjsModule {}
