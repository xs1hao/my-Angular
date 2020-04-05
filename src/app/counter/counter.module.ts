import { NgModule } from "@angular/core";
import { CounterComponent } from './counter.component';
import { CounterRoutingModule } from './counter-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../store/reducer/counter.reducer';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
        CounterComponent
    ],
    imports:[
        CommonModule,
        CounterRoutingModule,
        NgZorroAntdModule,
        StoreModule.forRoot({ count: counterReducer })
    ],
    exports:[

    ]
})
export class CounterModule {}