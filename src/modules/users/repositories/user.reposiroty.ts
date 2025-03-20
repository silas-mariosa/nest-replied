import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return user;
  }

  // Você pode adicionar outras consultas personalizadas aqui
}
