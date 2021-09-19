import { Component } from '@angular/core';
import { DirectionService } from '../@core/mock/direction.service';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout [dir]="direction">
      <nb-menu [items]="menu" ></nb-menu>
     
      <router-outlet></router-outlet>
      
    </ngx-one-column-layout>
  `,
  providers:[DirectionService]
})
export class PagesComponent {

  menu = MENU_ITEMS;
  direction='rtl';
  // constructor(private dir:DirectionService){
  //  this.dir.getDirection().subscribe((response:any)=>{
  //   this.direction=response.value;
  //     console.log(response);
  //   console.log('hi page');
  //   })
  // }
  constructor(){
    console.log('pages');
  }
  

  
}
