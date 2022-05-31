export class Forecast {
  constructor(
    public id: number,
    public date: Date,
    public product: any,
    public store: any,
    public numberOfSales: number,
  ) {
  }
}
