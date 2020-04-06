import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ZorroComponent } from './zorro/carousle/zorro.component';
import { TestComponent } from './test/test.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ButtonComponent } from './zorro/button/button.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { FilterModule } from './filter/filter.module';

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
export class UiComponentsModule {}