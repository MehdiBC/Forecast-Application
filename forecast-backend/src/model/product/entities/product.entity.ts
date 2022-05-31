import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Forecast } from '../../forecast/entities/forecast.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn({ name: 'product_id' })
  id: number;
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  description: string;
  @Column({ nullable: false })
  price: number;
  @OneToMany(() => Forecast, (forecast) => forecast.product)
  forecasts: Forecast[];
}
