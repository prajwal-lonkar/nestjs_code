import { Module } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerInterceptor } from './jobs/interceptors/logger.interceptor';

@Module({
  imports: [JobsModule],
  controllers: [],
  providers: [{provide:APP_INTERCEPTOR , useClass:LoggerInterceptor}],
})
export class AppModule {}
