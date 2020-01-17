import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumberString, IsOptional, IsString, IsBoolean } from 'class-validator';
import { SortType } from '../cinema.service';

export class SearchCinemaOptions {
  @ApiPropertyOptional({ type: 'string', description: 'Название или часть названия кинотеатра' })
  @IsOptional()
  @IsString()
  cinema_name?: string;

  @ApiPropertyOptional({ type: 'number', minimum: 0, description: 'Максимальное количество залов' })
  @IsOptional()
  @IsNumberString()
  maxAmount_of_halls?: number;

  @ApiPropertyOptional({ type: 'number', minimum: 0, description: 'Максимальное количество мест' })
  @IsOptional()
  @IsNumberString()
  maxAmount_of_places?: number;

  @ApiPropertyOptional({ type: 'boolean', description: 'Наличие 3Д' })
  @IsOptional()
  @IsBoolean()
  threeD?: boolean;

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
  @ApiPropertyOptional({ type: 'number', example: 3, default: 10 })
  limit?: number;

  @IsNumberString()
  @IsOptional()
  @ApiPropertyOptional({ type: 'number', example: 5, default: 0 })
  offset?: number;
}
