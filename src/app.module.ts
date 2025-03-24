import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [UserModule, AuthModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
