import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ZorroComponent } from './zorro/carousle/zorro.component';
import { TestComponent } from './test/test.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ButtonComponent } from './zorro/button/button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        ZorroComponent,
        TestComponent,
        ButtonComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        NgZorroAntdModule 
    ],
    exports:[
        ZorroComponent,
        TestComponent,
        ButtonComponent
    ]
})
export class UiComponentsModule {}