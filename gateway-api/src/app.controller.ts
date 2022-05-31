import {
  CacheInterceptor,
  Controller,
  Get,
  Param,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { Roles } from './authorisation/role.decorator';
import { Role } from './user/enumerations/role.enum';
import { ForecastDto } from './forecast.dto';

@Controller()
@Roles(Role.FORECASTER)
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getForecasts(@Query() forecastDto: ForecastDto): Observable<any[]> {
    const { date, productId, storeId } = { ...forecastDto };
    return this.appService.getForecasts({
      date,
      product: { id: productId },
      store: { id: storeId },
    });
  }

  @Get('stores')
  getStores(): Observable<any[]> {
    return this.appService.getStores();
  }

  @Get('products')
  getProducts(@Query('store_id') storeId: number): Observable<any[]> {
    return this.appService.getProducts(storeId);
  }

  @Get(':id')
  getForecast(@Param('id') id: number): Observable<any> {
    return this.appService.getForecast(id);
  }
}
