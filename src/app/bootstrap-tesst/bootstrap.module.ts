import { NgModule } from "@angular/core";
import { ButtonsModule } from 'ngx-bootstrap';
import { BootstrapTesstComponent } from '../bootstrap-tesst/bootstrap-tesst.component';
import { BootstrapRoutingModule } from '../bootstrap-tesst/bootstrap-routing.module';
import { ChildComponent } from '../bootstrap-tesst/child/child.component';
import { UiComponentsModule } from '../components/ui-components.module';


@NgModule({
    declarations:[
        BootstrapTesstComponent,
        ChildComponent
    ],
    imports:[
        ButtonsModule.forRoot(),
        BootstrapRoutingModule,
        UiComponentsModule
    ]
})
export class BootstrapModule {}