import {NgModule} from '@angular/core';
import { DevelopersComponent } from './developers/developers.component';
import { ItComponent } from './it/it.component';
import { StuffRoutingModule } from './stuff-routing.module';
import { StuffComponent } from './stuff.component';

@NgModule({
imports:[
        StuffRoutingModule,

    ],
    declarations:[
       DevelopersComponent,
       StuffComponent,
       ItComponent
    ]
})

export class StuffModule{}

