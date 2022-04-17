import { PartialType } from '@nestjs/mapped-types';
import { CreateForecastDto } from './create-forecast.dto';

export class UpdateForecastDto extends PartialType(CreateForecastDto) {
  id: number;
}
