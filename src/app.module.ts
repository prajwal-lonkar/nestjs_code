import { Module } from '@nestjs/common';
import { UserModule } from './users/user-modules';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
