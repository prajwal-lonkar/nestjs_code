import { Controller, Get } from "@nestjs/common";

@Controller("/interviews")
export class  JobsInterviewController{

    @Get()
    returnResponse(){
        return 'Jobs Interview Route Called...'
    }

}