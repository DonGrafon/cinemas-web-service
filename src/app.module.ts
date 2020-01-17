import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CinemaModule } from './cinema/cinema.module';
import { SessionModule } from './session/session.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmOptions } from 'config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmOptions),
    CinemaModule, 
    SessionModule],
  controllers: [AppController],
})
export class AppModule {}
