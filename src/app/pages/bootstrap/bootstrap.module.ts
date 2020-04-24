import { NgModule } from "@angular/core";
import { ButtonsModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BootstrapTesstComponent } from './bootstrap-tesst.component';
import { ChildComponent } from './child/child.component';
import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations:[
        BootstrapTesstComponent,
        ChildComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        ButtonsModule.forRoot(),
        BootstrapRoutingModule,
        SharedModule
    ],
    // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]//该组件允许html模板中的任何html标签。
})
export class BootstrapModule {}