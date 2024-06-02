import { Injectable } from "@nestjs/common";

@Injectable()
export class JobsServices {

    createJob(jobData){
        return jobData;
    }

}