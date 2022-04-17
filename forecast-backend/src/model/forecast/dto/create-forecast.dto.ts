import { IsDate, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateForecastDto {
  @IsNotEmpty()
  @IsDate()
  @Transform((data) => new Date(data.value))
  date: Date;
  @IsNotEmpty()
  numberOfSales: number;
}
