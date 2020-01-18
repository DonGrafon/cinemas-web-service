import { ApiProperty } from '@nestjs/swagger';
import { Cinema } from 'src/cinema/models/cinema.model';
import { WebMovie } from '../models/webMovie.model';
import { MovieFormat } from '../models/movie_format.emun';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateSessionOptions {

  @ApiProperty({ type: 'datetime', nullable: false, example: '2019-11-09 10:00:00' })
  time: Date;

  @ApiProperty({ type: 'integer', nullable: false, example: 200 })
  price: number;

  @ApiProperty({ type: 'integer', nullable: false, example: 50 })
  places: number;

  @IsEnum(MovieFormat)
  @IsNotEmpty()
  @ApiProperty({ required: true, nullable: false, type: 'string', enum: Object.values(MovieFormat), example: MovieFormat.threeD })
  movie_format: MovieFormat;

  @ApiProperty({ type: 'string', nullable: false, example: 'Пять звезд' })
  cinema_name: string;
  
  @ApiProperty({ type: 'string', nullable: false, example: 'Доктор Сон' })
  movie_name: string;
}
