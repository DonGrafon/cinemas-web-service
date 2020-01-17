import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { WebCity } from '../models/WebCity.model';

export class CreateParticipantOptions {
  @ApiProperty({ type: 'string', nullable: false, required: true, example: 'Пять звезд' })
  readonly cinema_name: string;

  @ApiPropertyOptional({ type: 'integer', nullable: false, minimum: 1, description: 'Количество залов', example: 3 })
  readonly amount_of_halls?: number;

  @ApiPropertyOptional({ type: 'integer', nullable: false, minimum: 1, description: 'Общее количество мест в кинотеатре', example: 250 })
  readonly amount_of_places?: number;

  @ApiPropertyOptional({ type: 'boolean', nullable: false, description: 'Наличие 3Д', example: true })
  threeD?: boolean;

  @ApiProperty({ type: 'varchar', nullable: false, example: 'Пролетарский проспект, д. 10' })
  adress: string;

  @ApiProperty({ type: 'string', nullable: false, example: 'Сочи' })
  WebCity_name: WebCity;
}
