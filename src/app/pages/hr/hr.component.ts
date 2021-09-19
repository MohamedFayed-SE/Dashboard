import{Component, OnInit} from '@angular/core';
import { DirectionService } from '../../@core/mock/direction.service';
@Component({
selector:'ngx-hr',
templateUrl:'./hr.component.html',
styleUrls:['./hr.component.scss'],
providers:[DirectionService]
})

export class HrComponent implements OnInit {

    constructor(private dr:DirectionService)
    {
       
    }
    ngOnInit(){
        console.log('on it');
        this.dr.direction.subscribe((res)=>{
            console.log(res);
        })
    }

}