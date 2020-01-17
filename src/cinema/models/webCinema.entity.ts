import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { City } from './city.model';

@Entity()
export class WebCinema {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', nullable: false })
  cinema_name: string;

  @Column({ type: 'int', nullable: false, unsigned: true, default: 1 })
  amount_of_halls?: number;

  @Column({ type: 'int', nullable: false, unsigned: true, default: 1 })
  amount_of_places?: number;

  @Column({ type: 'boolean', nullable: false })
  threeD?: boolean;

  @Column({ type: 'varchar', nullable: false })
  adress: string;

  @OneToMany(type => City, city => city.city_name, { onDelete: 'RESTRICT', cascade: true })
  city_name: City;
}
