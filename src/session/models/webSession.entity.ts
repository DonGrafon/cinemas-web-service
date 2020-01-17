import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { WebMovie } from './webMovie.model';
import { ApiProperty } from '@nestjs/swagger';
import { Cinema } from 'src/cinema/models/cinema.model';
import { MovieFormat } from './movie_format.emun';

@Entity()
export class WebSession {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  @ApiProperty({ type: 'number', description: 'Уникальный идентификатор', nullable: false, minimum: 1, readOnly: true, example: 1 })
  id: number;

  @ApiProperty({ type: 'datetime', nullable: false, example: '2019-11-09 10:00:00' })
  @Column({ type: 'datetime', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  time: Date;

  @ApiProperty({ type: 'number', nullable: false, minimum: 0, example: 200 })
  @Column({ type: 'int', nullable: false, default: 0 })
  price: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  @ApiProperty({ type: 'number', nullable: false, example: 50 })
  places: number;

  @Column({ type: 'enum', nullable: false, enum: Object.values(MovieFormat) })
  @ApiProperty({ type: 'string', example: MovieFormat.threeD, nullable: false, enum: Object.values(MovieFormat) })
  movie_format: MovieFormat;

  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ type: Cinema, nullable: false, example: 'Пять звезд' })
  cinema_name: Cinema;
  
  @Column({ type: 'varchar', nullable: false })
  @ApiProperty({ type: WebMovie, nullable: false, example: 'Доктор Сон' })
  movie_name: WebMovie;
}