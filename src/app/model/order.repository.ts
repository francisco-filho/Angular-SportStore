import { Injectable } from "@angular/core";
import { Order } from "./order";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class OrderRepository {
  constructor(private readonly dataSource: RestDataSource){}

  saveOrder(order: Order) : Observable<Order> {
    return this.dataSource.saveOrder(order)
  }
}
