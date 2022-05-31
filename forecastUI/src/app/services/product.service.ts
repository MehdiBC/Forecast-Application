import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/entities/product.entity";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly client: HttpClient) { }

  find(storeId: number): Observable<Product[]> {
    return this.client.get<Product[]>(`${environment.gatewayApiUrl}/products?store_id=${storeId}`);
  }
}
