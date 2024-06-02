import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { EmployersModule } from './employers/empolyers.module';

@Module({
  imports: [UsersModule, JobsModule, EmployersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
