import { Module } from '@nestjs/common';
import { JobsController } from './controllers/jobs.controller';
import { JobServices } from './services/jobs.services';

@Module({
  imports: [],
  controllers: [JobsController],
  providers: [JobServices],
})
export class JobsModule {}
