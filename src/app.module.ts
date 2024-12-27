import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // Cargar variables de entorno
    ConfigModule.forRoot(),

    // Configuración de MongoDB
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
    }),

    // Módulo de autenticación
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
