import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Cinema } from 'src/cinema/models/cinema.model';
import { WebMovie } from './webMovie.model';
import { MovieFormat } from './movie_format.emun';
import { ManyToOne } from 'typeorm';

export class Session {
  @ApiProperty({ type: 'integer', nullable: false, example: 1 })
  id: number;

  @ApiProperty({ type: 'datetime', nullable: false, example: 	
  '2019-11-09 10:00:00' })
  time: Date;

  @ApiProperty({ type: 'integer', nullable: false, example: 200 })
  price: number;

  @ApiProperty({ type: 'integer', nullable: false, example: 50 })
  places: number;

  @ApiProperty({ type: 'string', nullable: false, example: MovieFormat.threeD, enum: Object.values(MovieFormat) })
  movie_format: MovieFormat;

  @ManyToOne(type => Cinema, Cinema => Cinema.cinema_name)
  cinema_name: Cinema;
  
  @ApiProperty({ type: WebMovie, nullable: false, example: 'Доктор Сон' })
  movie_name: WebMovie;
}