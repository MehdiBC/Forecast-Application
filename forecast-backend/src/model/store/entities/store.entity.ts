import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Forecast } from '../../forecast/entities/forecast.entity';

@Entity('stores')
export class Store {
  @PrimaryGeneratedColumn({ name: 'store_id' })
  id: number;
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  description: string;
  @OneToMany(() => Forecast, (forecast) => forecast.store)
  forecasts: Forecast[];
}
