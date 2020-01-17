import { ApiProperty } from '@nestjs/swagger';
import { City } from './city.model';

export class Cinema {
  @ApiProperty({ type: 'integer', nullable: false, example: 1 })
  id: number;

  @ApiProperty({ type: 'string', nullable: false, example: 'Пять звезд' })
  cinema_name: string;

  @ApiProperty({ type: 'integer', nullable: false, minimum: 1, description: 'Количество залов', example: 3  })
  amount_of_halls?: number;

  @ApiProperty({ type: 'integer', nullable: false, minimum: 1, description: 'Общее количество мест в кинотеатре', example: 250 })
  amount_of_places?: number;

  @ApiProperty({ type: 'boolean', nullable: false, description: 'Наличие 3Д', example: true })
  threeD?: boolean;

  @ApiProperty({ type: 'varchar', nullable: false, example: 'Пролетарский проспект, д. 10' })
  adress: string;

  @ApiProperty({ type: 'string', nullable: false, example: 'Сочи' })
  city_name: City;
}