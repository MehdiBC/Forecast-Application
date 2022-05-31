import { Injectable } from '@nestjs/common';
import { Forecast } from './entities/forecast.entity';
import { generateCrudService } from '../../utils/crud.generic';
import { CreateForecastDto } from './dto/create-forecast.dto';

@Injectable()
export class ForecastService extends generateCrudService(Forecast) {
  async findAllForecasts(forecastDto: CreateForecastDto): Promise<Forecast[]> {
    const startDate = new Date(forecastDto.date);
    startDate.setMonth(forecastDto.date.getMonth() - 6);
    const endDate = new Date(forecastDto.date);
    endDate.setMonth(forecastDto.date.getMonth() + 6);

    const forecastsInDb = await this.entityRepository
      .createQueryBuilder('forecasts')
      .where('forecasts.date >= :startDate', {
        startDate: startDate.toLocaleDateString('fr'),
      })
      .andWhere('forecasts.date <= :endDate', {
        endDate: endDate.toLocaleDateString('fr'),
      })
      .getMany();

    const datesInDb = forecastsInDb.map((forecast) => forecast.date);

    // insert new forecasts with random values
    const date = new Date(startDate.getTime());
    while (date <= endDate) {
      if (datesInDb.indexOf(date) === -1) {
        forecastsInDb.push({
          ...forecastDto,
          date: new Date(date),
          numberOfSales: Math.floor(Math.random() * 200),
        });
      }
      date.setDate(date.getDate() + 1);
    }

    return this.entityRepository.save(forecastsInDb);
  }
}
