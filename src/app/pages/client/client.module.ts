import { NgModule } from "@angular/core";
import {clientOrderComponent} from './client-order/client-order.component'
import { ClientRoutingModule } from "./client-routing.module";
import { ClientComponent } from "./client.component";

@NgModule({ 
    imports:[
        ClientRoutingModule,
        
    ],
    declarations:[      
        clientOrderComponent,
        ClientComponent,
    ],

   
})


export class ClientModule{}