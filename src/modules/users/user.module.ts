import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.reposiroty';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Injetando a entidade User no TypeOrm
  controllers: [UserController],
  providers: [UserService, UserRepository], // Incluindo o UserRepository como provider
})
export class UserModule {}
