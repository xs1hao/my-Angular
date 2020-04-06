import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ButtonsModule } from 'ngx-bootstrap';
import { BootstrapTesstComponent } from '../bootstrap-tesst/bootstrap-tesst.component';
import { BootstrapRoutingModule } from '../bootstrap-tesst/bootstrap-routing.module';
import { ChildComponent } from '../bootstrap-tesst/child/child.component';
import { UiComponentsModule } from '../components/ui-components.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


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
        UiComponentsModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]//该组件允许html模板中的任何html标签。
})
export class BootstrapModule {}