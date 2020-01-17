import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { WebCinema } from 'src/cinema/models/webCinema.entity';
import { WebSession } from 'src/session/models/webSession.entity';

export let typeOrmOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'std-mysql',
  port: 3306,
  username: 'std_260',
  password: 'ghjdthrf290',
  database: 'std_260',
  entities: [WebCinema, WebSession],
  synchronize: true,
};
