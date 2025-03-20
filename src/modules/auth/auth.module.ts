import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './services/auth.service';
import { UserModule } from '../users/user.module';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: 'yourSecretKey',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
