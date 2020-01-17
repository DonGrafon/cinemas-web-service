import { IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Cinema } from 'src/cinema/models/cinema.model';
import { WebMovie } from '../models/webMovie.model';

export class UpdateSessionOptions {
  @IsOptional()
  @ApiPropertyOptional({ type: 'integer', nullable: false, description: 'Цена билета', example: 200 })
  readonly price?: number;

  @IsOptional()
  @ApiPropertyOptional({ type: 'integer', nullable: false, description: 'Количество мест на сеансе', example: 250 })
  readonly places?: number;

  @IsOptional()
  @ApiPropertyOptional({ type: Cinema, nullable: false, example: 'Пять звезд' })
  cinema_name?: Cinema;
  
  @IsOptional()
  @ApiPropertyOptional({ type: WebMovie, nullable: false, example: 'Доктор Сон' })
  movie_name?: WebMovie;
}
