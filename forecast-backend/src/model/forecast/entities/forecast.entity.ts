import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { Store } from '../../store/entities/store.entity';

@Entity('forecasts')
export class Forecast {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  date: Date;
  @Column({ name: 'number_of_sales', nullable: false })
  numberOfSales: number;
  @ManyToOne(() => Product, (product) => product.forecasts)
  @JoinColumn({ name: 'product_id' })
  product: Product;
  @ManyToOne(() => Store, (store) => store.forecasts)
  @JoinColumn({ name: 'store_id' })
  store: Store;
}
