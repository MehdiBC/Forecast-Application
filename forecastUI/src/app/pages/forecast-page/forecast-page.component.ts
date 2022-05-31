import { Component, OnInit } from '@angular/core';
import {Store} from "../../models/entities/store.entity";
import {Product} from "../../models/entities/product.entity";
import {Forecast} from "../../models/entities/forecast.entity";
import {StoreService} from "../../services/store.service";
import {ProductService} from "../../services/product.service";
import {ForecastService} from "../../services/forecast.service";

@Component({
  selector: 'app-forecast-page',
  templateUrl: './forecast-page.component.html',
  styleUrls: ['./forecast-page.component.css']
})
export class ForecastPageComponent implements OnInit {
  stores: Store[] = [];
  products: Product[] = [];
  forecasts: Forecast[] = [];

  selectedStore: any = null;
  selectedProduct: any = null;
  selectedDate?: Date;

  label: any[] = [];
  datasets: any[] = [];


  constructor(
    private readonly storeService: StoreService,
    private readonly productService: ProductService,
    private readonly forecastService: ForecastService,
  ) {
  }

  ngOnInit(): void {
    this.storeService.find().subscribe({
      next: (value) => {this.stores = value;},
      error: (err) => console.log(err)
    });
  }

  selectStore(store: Store): void {
    this.selectedStore = store;
  }

  loadProducts() {
    this.productService.find(this.selectedStore.id).subscribe({
      next: (value) => {this.products = value;},
      error: (err) => console.log(err),
    });
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  selectDate(date: string) {
    this.selectedDate = new Date(date);
    this.forecastService.getForecasts({
      productId: this.selectedProduct.id,
      storeId: this.selectedStore.id,
      date: this.selectedDate.toLocaleDateString('fr'),
    }).subscribe({
      next: (value)=> {
        this.forecasts = value;
        this.label = this.forecasts.map((value) => value.date.toLocaleDateString('fr'));
        this.datasets = [{
          label: 'Forecasts',
          data: this.forecasts.map((value) => value.numberOfSales),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }];
      },
      error: err => console.log(err)
    });
  }
}
