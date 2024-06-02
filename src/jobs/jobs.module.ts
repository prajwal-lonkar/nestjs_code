import { Module } from "@nestjs/common";
import { JobsController } from "./controllers/jobs.controller";
import { JobsApplicationsController } from "./controllers/jobs-applications.controller";
import { JobsInterviewController } from "./controllers/jobs-interview.controller";

@Module({
  imports: [],         
  controllers: [JobsApplicationsController,JobsInterviewController,JobsController],
  providers: [],
  exports: [JobsModule],
})
export class JobsModule {}

