import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv'; // Importar dotenv
dotenv.config(); // Cargar variables de entorno

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors();

  // Configuración global de validación
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const PORT = process.env.PORT || 3000;
  console.log(`App corriendo en puerto: ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
