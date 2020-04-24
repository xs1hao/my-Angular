import { NgModule } from "@angular/core";
import { CounterComponent } from './counter.component';
import { CounterRoutingModule } from './counter-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
        CounterComponent
    ],
    imports:[
        CommonModule,
        CounterRoutingModule,
        NgZorroAntdModule
    ],
    exports:[

    ]
})
export class CounterModule {}