import { Module } from "@nestjs/common";
import { AccountServices } from "./services/account.services";
import { AccountsController } from "./controllers/accounts.controllers";

@Module({
  imports: [],
  controllers: [AccountsController],
  providers: [AccountServices],
  exports: [],
})
export class AccountsModule {}