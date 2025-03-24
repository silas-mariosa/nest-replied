import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Para carregar variáveis de ambiente do .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST ?? 'localhost',
      port: parseInt(process.env.DATABASE_PORT ?? '5432'),
      username: process.env.DATABASE_USER ?? 'postgres',
      password: process.env.DATABASE_PASSWORD ?? 'password',
      database: process.env.DATABASE_NAME ?? 'mydb',
      autoLoadEntities: true, // Carregar entidades automaticamente
      synchronize: true, // Não usar em produção! Apenas para dev.
    }),
  ],
})
export class DatabaseModule {}
