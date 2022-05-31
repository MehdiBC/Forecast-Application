import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern('createProduct')
  create(@Payload() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @MessagePattern('findAllProduct')
  findAllByStore(@Payload('storeId') storeId: number): Promise<Product[]> {
    return this.productService.findAllByStore(storeId);
  }

  @MessagePattern('findOneProduct')
  findOne(@Payload() name: string) {
    return this.productService.findOneProduct(name);
  }
}
