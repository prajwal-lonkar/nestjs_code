import { Module } from "@nestjs/common";
import { OfficeController } from "./controllers/office-controller";

@Module({
  imports: [],         
  controllers: [OfficeController],
  providers: [],
  exports: [OfficeModule],
})
export class OfficeModule {}

