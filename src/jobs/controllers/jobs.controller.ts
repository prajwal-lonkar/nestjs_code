import { Body, Controller, Post } from "@nestjs/common";
import { JobsServices } from "../services/jobs.services";
import { CreateJobDto } from "../dtos/create-job.dto";
import { JoiValidationPipe } from "../pipes/joi-validation.pipe";
import { createJobSchema } from "../schemas/createJob.schema";

@Controller("jobs")
export class JobsController{

    constructor(private readonly jobsService:JobsServices){}

    @Post()
    createJob(@Body(new JoiValidationPipe(createJobSchema)) createJobDto:CreateJobDto){

        return this.jobsService.createJob(createJobDto);   
        
    }
}  