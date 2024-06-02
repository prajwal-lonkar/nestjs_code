import { Controller, Inject } from "@nestjs/common";
import { Subject } from "rxjs";


@Controller()
export class DynanicInjectionController{
    
    constructor(@Inject('CONDITIONAL') private conditionalOutput:Subject<any>){
        console.log(this.conditionalOutput);
        
    }
}