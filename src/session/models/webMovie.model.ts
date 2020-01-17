import { ApiProperty } from "@nestjs/swagger";

export class WebMovie {

  @ApiProperty({ type: 'integer', nullable: false, example: 1 })
  readonly id: number;

  @ApiProperty({ type: 'varchar', nullable: false, example: 'Доктор Сон' })
  readonly movie_name: string;

  @ApiProperty({ type: 'varchar', nullable: false, example: 'Mike Flanagan' })
  readonly director: string;

  @ApiProperty({ type: 'date', nullable: false, example: '2019-11-07' })
  readonly release_date: number;

  @ApiProperty({ type: 'varchar', nullable: false, example: 'Литература ужасов' })
  readonly genre: string;

  @ApiProperty({ type: 'time', nullable: false, example: '02:33:00' })
  readonly duration: number;

  @ApiProperty({ type: 'varchar', nullable: false, example: '18+' })
  readonly age_limit: string;
}
