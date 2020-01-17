import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsNumberString, Max, Min } from "class-validator";
import { SortType } from "src/cinema/cinema.service";

export class GetAllOptions {
    @ApiPropertyOptional({ type: 'string', enum: Object.values(SortType), nullable: true, default: SortType.DESC, example: SortType.ASC })
    @IsOptional()
    readonly sort?: SortType;
  
    @ApiPropertyOptional({ type: 'number', nullable: true, default: 3, example: 2, maximum: 10 })
    @Min(1)
    @Max(10)
    @IsOptional()
    readonly limit?: number;
  
    @ApiPropertyOptional({ type: 'number', nullable: true, default: 0, example: 5 })
    @IsNumberString()
    @IsOptional()
    readonly offset?: number;
  }