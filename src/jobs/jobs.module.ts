import { Module } from "@nestjs/common";
import { JobsServices } from "./services/jobs.services";
import { JobsController } from "./controllers/jobs.controller";


@Module({
    imports:[],
    controllers:[JobsController],
    providers:[JobsServices],
    exports:[]
})

export class JobsModule{}
