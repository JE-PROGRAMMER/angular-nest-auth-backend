import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors();

  // Configuración global de validación
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Excluir campos no definidos en DTO
      forbidNonWhitelisted: true, // Lanzar error si se incluyen campos no permitidos
    }),
  );

  await app.listen( process.env.PORT ?? 3000);
}
bootstrap();
