import { Body, Controller, Get, Param, Post, Query, ValidationPipe } from "@nestjs/common";
import { JobServices } from "../services/jobs.services";
import { CreateJobDTO } from "../dtos/create-job.dto";
import { Paginable } from "../dtos/paginable.dto";


@Controller("jobs")
export class JobsController {

    constructor (private readonly jobService:JobServices){}

    @Post("/")
    createJob(@Body(ValidationPipe) createJobDto:CreateJobDTO){

        return {success :true}
        // return this.jobService.createJob(createJobDto)
    }

    @Get("tags/:id")
    findJobTags(@Query() query:Paginable){        // Here Paginable is the DTO so its responsibility to convert 
        console.log(query);
        return {success:true}
    }

    @Get(":id")
    findJob(@Param("id" , new ValidationPipe({transform:true}))
    id:number){
        console.log(typeof id);
        
        return {success:true}
    }
}

/**
 *  23 -  27
 *  In param the number is recieved in the form of string. 
 *  Here we are not making use of any DTO so, here ValidationPipe will take the responsibility 
 *  to convert into a number, depending on the transformation value (true or false) . 
 *  When false it will keep as string only. 
 * 
 *  13, 20
 *  Here in () we have removed 'ValidationPipe' and we need not mention that explicitly because
 *  in app.module we have made it global so validations are applied to every controller and 
 *  route handler.
 */