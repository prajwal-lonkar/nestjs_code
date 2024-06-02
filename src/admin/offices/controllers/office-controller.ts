import { Controller, Get } from "@nestjs/common";


//     admin/office
@Controller("/")
export class OfficeController{

    @Get()
    returnResponse(){
        return 'Office Controller route inside Admin Called...'
    }
}