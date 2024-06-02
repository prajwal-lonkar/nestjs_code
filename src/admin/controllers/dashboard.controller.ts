import { Controller, Get } from "@nestjs/common";

@Controller("/dashboard")
export class DashboardController{

    @Get()
    returnResponse(){
        return 'Dashboard Controller'
    }
}