import { Controller, Get } from "@nestjs/common";

@Controller()
export class JobsController{

    @Get()
    returnResponse(){
        return 'Jobs Controller Route Called...'
    }
}