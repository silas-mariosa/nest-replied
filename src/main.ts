import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS (necessário para frontends que consomem a API)
  app.enableCors();

  // Adiciona validação global para DTOs usando class-validator e class-transformer
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove campos não definidos nos DTOs
      forbidNonWhitelisted: true, // Retorna erro se houver campos desconhecidos
      transform: true, // Transforma os dados para os tipos definidos nos DTOs
    }),
  );

  // Obtém a porta da variável de ambiente ou usa 3000 como fallback
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') ?? 3000;

  await app.listen(port);
  console.log(`🚀 Server running on http://localhost:${port}`);
}

bootstrap();
