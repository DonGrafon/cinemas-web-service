import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CinemaModule } from './cinema/cinema.module';

@Module({
  imports: [CinemaModule],
  controllers: [AppController],
})
export class AppModule {}
