import { Module, HttpModule } from '@nestjs/common';
import { CinemaController } from './cinema.controller';
import { CinemaService } from './cinema.service';

@Module({
  controllers: [CinemaController],
  providers: [CinemaService],
  exports: [CinemaService]
})
export class CinemaModule {}
