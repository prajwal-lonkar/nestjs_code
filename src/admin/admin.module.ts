import { Module } from "@nestjs/common";
import { DashboardController } from "./controllers/dashboard.controller";
import { OfficeModule } from "./offices/office.module";

@Module({
  imports: [OfficeModule],         
  controllers: [DashboardController],
  providers: [],
  exports: [AdminModule],
})
export class AdminModule {}
