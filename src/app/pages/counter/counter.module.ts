import { NgModule } from "@angular/core";
import { CounterComponent } from './counter.component';
import { CounterRoutingModule } from './counter-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
        CounterComponent
    ],
    imports:[
        CommonModule,
        CounterRoutingModule,
    ],
    exports:[

    ]
})
export class CounterModule {}
