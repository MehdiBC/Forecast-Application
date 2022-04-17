import { Injectable } from '@nestjs/common';
import { Forecast } from './entities/forecast.entity';
import { generateCrudService } from '../../utils/crud.generic';
import { randomInt } from 'crypto';

@Injectable()
export class ForecastService extends generateCrudService(Forecast) {
  createForecasts(date: Date): Promise<Forecast> {
    const forecasts = [];
    let forecast;
    const startDate = new Date(date);
    startDate.setFullYear(date.getFullYear() - 1);
    const endDate = new Date(date);
    endDate.setFullYear(date.getFullYear() + 1);
    for (
      let date = startDate;
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      forecast = this.entityRepository.create({
        date,
        numberOfSales: randomInt(0, 20),
      });
      forecasts.push(forecast);
      date = new Date(date);
    }
    return this.entityRepository.save(forecasts);
  }
}
