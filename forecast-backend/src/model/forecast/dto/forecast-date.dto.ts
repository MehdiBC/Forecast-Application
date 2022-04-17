import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty } from 'class-validator';

export class ForecastDateDto {
  @IsNotEmpty()
  @IsDate()
  @Transform((data) => new Date(data.value))
  date: Date;
}
