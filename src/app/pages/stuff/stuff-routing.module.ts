import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import {StuffComponent} from './stuff.component'
import { DevelopersComponent } from './developers/developers.component';
import { ItComponent } from './it/it.component';

const routes:Routes=[{
    path:'',
    component:StuffComponent,
    children:[{
        path:'developers',
        component:DevelopersComponent
    },
    {
        path:'it',
        component:ItComponent
    }
]

}]

@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule],
})

export class StuffRoutingModule{}

