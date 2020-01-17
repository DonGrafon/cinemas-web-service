import { Module } from '@nestjs/common';
import { CinemaController } from './cinema.controller';
import { CinemaService } from './cinema.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebCinema } from './models/webCinema.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([WebCinema]),
  ],
  controllers: [CinemaController],
  providers: [CinemaService],
  exports: [CinemaService]
})
export class CinemaModule {}
