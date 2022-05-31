import { Injectable } from '@nestjs/common';
import { generateCrudService } from '../../utils/crud.generic';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService extends generateCrudService(Product) {
  findAllByStore(storeId: number): Promise<Product[]> {
    return this.entityRepository
      .createQueryBuilder('products')
      .innerJoinAndSelect('products.forecasts', 'forecasts')
      .where('forecasts.store_id = :storeId', { storeId })
      .getMany();
  }

  findOneProduct(name: string): Promise<Product> {
    return this.entityRepository.findOne(name);
  }
}
