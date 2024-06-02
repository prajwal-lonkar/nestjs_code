import { Injectable } from "@nestjs/common";
import { CreateJobDTO } from "../dtos/create-job.dto";



@Injectable()
export class JobServices{

    createJob(createJobDto: CreateJobDTO) {
        // Business logic for creating a new job
    }


}