import { Module } from '@nestjs/common';
import { CompanyService } from './services/company.service';
import { EmployersController } from './controllers/employers.controller';
import { EmployersService } from './services/employers.service';

@Module({
  imports: [],
  controllers: [EmployersController],
  providers: [CompanyService, EmployersService],
  exports: [EmployersService],
})
export class EmployersModule {}
