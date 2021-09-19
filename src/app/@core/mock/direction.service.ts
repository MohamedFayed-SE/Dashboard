import {Injectable} from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class DirectionService{
    constructor(){
//console.log('direction Service');
    }

    direction=new Subject<any>();

   

    setDirection(dir:any){
        this.direction.next(dir);
        console.log(dir,'service')
       
    }
    getDirection():Observable<any>{
      
        return this.direction.asObservable();

    }
}
