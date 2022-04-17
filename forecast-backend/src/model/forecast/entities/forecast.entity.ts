import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity('forecasts')
export class Forecast {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  date: Date;
  @Column({ name: 'number_of_sales', nullable: false })
  numberOfSales: number;
  @ManyToOne(() => Product, { cascade: true })
  product: Product;
}
