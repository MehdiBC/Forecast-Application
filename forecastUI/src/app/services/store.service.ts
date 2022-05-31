import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Store} from "../models/entities/store.entity";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private readonly client: HttpClient) { }

  find(): Observable<Store[]> {
    return this.client.get<Store[]>(environment.gatewayApiUrl + '/stores');
  }
}
