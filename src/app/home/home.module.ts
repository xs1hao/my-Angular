import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { UiComponentsModule } from '../components/ui-components.module';

@NgModule({
    declarations:[
        HomeComponent
    ],
    imports:[
        UiComponentsModule,
        HomeRoutingModule
    ]
})
export class HomeModule {}