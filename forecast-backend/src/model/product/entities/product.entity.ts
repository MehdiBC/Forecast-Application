import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryColumn({ type: 'varchar' })
  name: string;
  @Column({ nullable: false })
  description: string;
  @Column({ nullable: false })
  price: number;
}
