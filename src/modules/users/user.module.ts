import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Injetando a entidade User no TypeOrm
  controllers: [UserController],
  providers: [UserService], // Apenas UserService aqui
  exports: [UserService], // Se precisar usar UserService em outros módulos
})
export class UserModule {}
