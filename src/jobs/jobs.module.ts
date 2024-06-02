import { Module } from "@nestjs/common";
import { JobsController } from "./controllers/jobs.controller";
import { JobsService } from "./services/jobs.service";
import { OfficeController } from "./controllers/office.controller";
import { UsersModule } from "src/users/users.module";

@Module({
  imports: [UsersModule],         // Now the exports of the UsersModule class can can used by JobsModule as well 
  controllers: [JobsController, OfficeController],
  providers: [JobsService],
  exports: [JobsService],
})
export class JobsModule {}

/**
 * Now as we have made our UsersModule as global now even if
 *  we dont add in our imports still we can access that module here
 */