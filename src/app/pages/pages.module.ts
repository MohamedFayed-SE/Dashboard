import { NgModule } from '@angular/core';
import { NbMenuModule, NbThemeModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
// import {HrComponentModule} from './hr/hr.module'
@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
   // HrComponentModule,
    NbThemeModule.forRoot()
   

  ],
  declarations: [
    PagesComponent,
  
  ],
})
export class PagesModule {
}
