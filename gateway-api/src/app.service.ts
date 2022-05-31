import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('FORECAST_BACKEND') private client: ClientProxy) {}

  getForecasts(forecastDto: any): Observable<any[]> {
    return this.client.send<any[]>('findAllForecast', forecastDto);
  }

  getStores(): Observable<any[]> {
    return this.client.send<any[]>('findAllStore', {});
  }

  getProducts(storeId: number): Observable<any[]> {
    return this.client.send('findAllProduct', { storeId });
  }

  getForecast(id: number): Observable<any> {
    return this.client.send('findForecast', { id });
  }
}
