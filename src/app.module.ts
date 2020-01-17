import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CinemaModule } from './cinema/cinema.module';
import { SessionModule } from './session/session.module';

@Module({
  imports: [CinemaModule, 
    SessionModule],
  controllers: [AppController],
})
export class AppModule {}
