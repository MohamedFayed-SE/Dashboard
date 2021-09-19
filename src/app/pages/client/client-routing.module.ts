import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {ClientComponent} from './client.component'
import { clientOrderComponent } from "./client-order/client-order.component";

const routes:Routes=[
    {
    path:'',
    component:ClientComponent
    },
    {
        path:'client-order',
        component:clientOrderComponent
    }
]

@NgModule({
 imports:[RouterModule.forChild(routes)],
 exports:[RouterModule]
})

export class ClientRoutingModule {}