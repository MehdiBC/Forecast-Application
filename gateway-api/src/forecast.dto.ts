import { IsDate, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class ForecastDto {
  @IsNotEmpty()
  @IsDate()
  @Transform((data) => new Date(data.value))
  date: Date;
  @IsNotEmpty()
  productId: number;
  @IsNotEmpty()
  storeId: number;
}
