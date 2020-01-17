import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumberString, IsOptional, IsString, IsDateString } from 'class-validator';
import { MovieFormat } from '../models/movie_format.emun';
import { SortType } from 'src/cinema/cinema.service';

export class SearchSessionOptions {
  
  @IsDateString()
  @IsOptional()
  @ApiPropertyOptional({ type: 'datetime', description: 'Дата сеанса не позднее..' })
  maxTime?: Date;

  @ApiPropertyOptional({ type: 'number', minimum: 0, description: 'Максимальная цена билета' })
  @IsOptional()
  @IsNumberString()
  maxPrice?: number;

  @ApiPropertyOptional({ type: 'number', minimum: 0, description: 'Максимальное количество мест' })
  @IsOptional()
  @IsNumberString()
  maxPlaces?: number;

  @ApiPropertyOptional({ type: 'enum', enum: Object.values(MovieFormat), description: 'Формат видео' })
  @IsOptional()
  @IsEnum(MovieFormat)
  movie_format?: MovieFormat;

  @ApiPropertyOptional({ type: 'string', description: 'Адрес кинотеатра' })
  @IsOptional()
  @IsString()
  adress?: string;

  @ApiPropertyOptional({ type: 'string', description: 'Город кинотеатра' })
  @IsOptional()
  @IsString()
  city_name?: string;

  @IsEnum(SortType)
  @IsOptional()
  @ApiPropertyOptional({ type: 'string', example: SortType.ASC, default: SortType.ASC, enum: Object.values(SortType) })
  sort?: SortType;

  @IsNumberString()
  @IsOptional()
  @ApiPropertyOptional({ type: 'number', example: 10, default: 10 })
  limit?: number;

  @IsNumberString()
  @IsOptional()
  @ApiPropertyOptional({ type: 'number', example: 0, default: 0 })
  offset?: number;
}
