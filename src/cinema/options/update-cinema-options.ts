import { IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCinemaOptions {
  @IsOptional()
  @ApiPropertyOptional({ type: 'integer', nullable: false, description: 'Количество залов', example: 3 })
  readonly amount_of_halls?: number;

  @IsOptional()
  @ApiPropertyOptional({ type: 'integer', nullable: false, description: 'Общее количество мест в кинотеатре', example: 250 })
  readonly amount_of_places?: number;

  @IsOptional()
  @ApiPropertyOptional({ type: 'boolean', nullable: false, description: 'Наличие 3Д', example: true })
  readonly threeD?: boolean;
}
