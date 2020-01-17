import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { WebCinema } from 'src/cinema/models/webCinema.entity';

export let typeOrmOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.NODE_ENV === 'production' ? 'std-mysql' : 'localhost',
  port: 3306,
  username: 'std_260',
  password: 'ghjdthrf290',
  database: 'std_260',
  entities: [WebCinema],
  synchronize: true,
};
