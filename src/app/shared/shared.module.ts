import { NgModule  } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { ZorroComponent } from './components/zorro/carousle/zorro.component';
import { ButtonComponent } from './components/zorro/button/button.component';
import { FilterModule } from './components/filter/filter.module';
import { TestComponent } from './components/test/test.component';

@NgModule({
    declarations:[
        ZorroComponent,
        TestComponent,
        ButtonComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
        FilterModule 
    ],
    exports:[
        ZorroComponent,
        TestComponent,
        ButtonComponent,
        FilterModule
    ]
})
export class SharedModule{}