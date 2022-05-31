import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ForecastDto} from "../models/dtos/forecast.dto";
import {Observable} from "rxjs";
import {Forecast} from "../models/entities/forecast.entity";

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private readonly client: HttpClient) { }

  getForecasts(forecastDto: ForecastDto): Observable<Forecast[]> {
    return this.client.get<Forecast[]>(`${environment.gatewayApiUrl}?productId=${forecastDto.productId}&storeId=${forecastDto.storeId}&date=${forecastDto.date}`)
  }
}
