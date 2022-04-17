import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ForecastService } from './forecast.service';
import { CreateForecastDto } from './dto/create-forecast.dto';
import { UpdateForecastDto } from './dto/update-forecast.dto';
import { ForecastDateDto } from './dto/forecast-date.dto';
import { Forecast } from './entities/forecast.entity';

@Controller()
export class ForecastController {
  constructor(private readonly forecastService: ForecastService) {}

  @MessagePattern('createForecasts')
  createForecasts(
    @Payload() forecastDateDto: ForecastDateDto,
  ): Promise<Forecast> {
    return this.forecastService.createForecasts(forecastDateDto.date);
  }

  @MessagePattern('createForecast')
  create(@Payload() createForecastDto: CreateForecastDto): Promise<Forecast> {
    return this.forecastService.create(createForecastDto);
  }

  @MessagePattern('findAllForecast')
  findAll(): Promise<Forecast[]> {
    return this.forecastService.findAll();
  }

  @MessagePattern('findOneForecast')
  findOne(@Payload() id: number) {
    return this.forecastService.findOne(id);
  }

  @MessagePattern('updateForecast')
  update(@Payload() updateForecastDto: UpdateForecastDto) {
    return this.forecastService.update(updateForecastDto.id, updateForecastDto);
  }

  @MessagePattern('removeForecast')
  remove(@Payload() id: number) {
    return this.forecastService.remove(id);
  }
}
