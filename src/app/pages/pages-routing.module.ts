import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HrComponent} from './hr/hr.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },

    {path:'hr',component:HrComponent},

    {
      path:'stuff',
      loadChildren:()=> import ('./stuff/stuff.module')
      .then(m=>m.StuffModule)
    },
    {
      path:'client',
      loadChildren:()=> import('./client/client.module')
      .then(m=>m.ClientModule)
    },
    
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },

    
    // {
    //   path:'hr',
    //   loadChildren:()=> import ('./hr/hr.module').then(m=>m.HrComponentModule )
    // },
    
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
   
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
