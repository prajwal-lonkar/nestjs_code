import { Global, Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { AccountsController } from 'src/accounts/controllers/accounts.controllers';
import { UsersService } from './services/users.service';

@Global()
@Module({
  imports: [],
  controllers: [UsersController, AccountsController],
  providers: [UsersService],
  exports: [UsersService], // Here we define which are the classes we want to be available to other modules as well
})
export class UsersModule {}

/**
 *  Here we declare this module as global means that this 
 *  module is accessible globally without explicitly importing it.
 */