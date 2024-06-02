import { Controller, Get } from "@nestjs/common";

@Controller("/applications")
export class JobsApplicationsController{

    @Get()
    returnResponse(){
        return 'Jobs Applications Route Called...'
    }
}