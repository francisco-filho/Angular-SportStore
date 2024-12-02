import { Injectable } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { Order } from "./order";
import { Observable } from "rxjs";

@Injectable()
export class OrderRepository {
  constructor(private readonly dataSource: StaticDataSource){}

  saveOrder(order: Order) : Observable<Order> {
    return this.dataSource.saveOrder(order)
  }
}
