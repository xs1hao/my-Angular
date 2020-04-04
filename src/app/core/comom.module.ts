import { NgModule } from "@angular/core";
import { BootstrapModule } from '../bootstrap-tesst/bootstrap.module';


@NgModule({
    imports:[
        BootstrapModule
    ],
    exports:[
        BootstrapModule
    ]
})
export class CommonModule {}