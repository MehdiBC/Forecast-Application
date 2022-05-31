import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ForecastService } from './forecast.service';
import { CreateForecastDto } from './dto/create-forecast.dto';
import { UpdateForecastDto } from './dto/update-forecast.dto';
import { Forecast } from './entities/forecast.entity';

@Controller()
export class ForecastController {
  constructor(private readonly forecastService: ForecastService) {}

  @MessagePattern('findAllForecast')
  findAll(@Payload() forecastDto: CreateForecastDto): Promise<Forecast[]> {
    return this.forecastService.findAllForecasts(forecastDto);
  }

  @MessagePattern('findOneForecast')
  findOne(@Payload() id: number) {
    return this.forecastService.findOne(id);
  }

  @MessagePattern('updateForecast')
  update(@Payload() updateForecastDto: UpdateForecastDto) {
    return this.forecastService.update(updateForecastDto);
  }
}
