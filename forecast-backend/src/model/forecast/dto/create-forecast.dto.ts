import { IsDate, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

class ProductDto {
  id: number;
}

class StoreDto {
  id: number;
}

export class CreateForecastDto {
  @IsNotEmpty()
  @IsDate()
  @Transform((data) => new Date(data.value))
  date: Date;
  @IsNotEmpty()
  product: ProductDto;
  @IsNotEmpty()
  store: StoreDto;
}
