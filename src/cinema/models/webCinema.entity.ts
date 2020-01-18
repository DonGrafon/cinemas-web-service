import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { WebCity } from './WebCity.model';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity()
export class WebCinema {
  @ApiProperty({ type: 'integer', nullable: false, example: 1 })
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @ApiProperty({ type: 'string', nullable: false, example: 'Пять звезд' })
  @Column({ type: 'varchar', nullable: false })
  cinema_name: string;

  @ApiPropertyOptional({ type: 'integer', nullable: false, minimum: 1, description: 'Количество залов', example: 3  })
  @Column({ type: 'int', nullable: false, unsigned: true })
  amount_of_halls?: number;

  @ApiPropertyOptional({ type: 'integer', nullable: false, minimum: 1, description: 'Общее количество мест в кинотеатре', example: 250 })
  @Column({ type: 'int', nullable: false, unsigned: true })
  amount_of_places?: number;

  @ApiPropertyOptional({ type: 'boolean', nullable: false, description: 'Наличие 3Д', example: true })
  @Column({ type: 'boolean', nullable: false })
  threeD?: boolean;

  @ApiProperty({ type: 'varchar', nullable: false, example: 'Пролетарский проспект, д. 10' })
  @Column({ type: 'varchar', nullable: false })
  adress: string;

  @ApiProperty({ type: 'string', nullable: false, example: 'Сочи' })
  @Column({ type: 'varchar', nullable: false })
  city_name: string;
}
