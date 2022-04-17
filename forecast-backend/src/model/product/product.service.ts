import { Injectable } from '@nestjs/common';
import { generateCrudService } from '../../utils/crud.generic';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService extends generateCrudService(Product) {}
