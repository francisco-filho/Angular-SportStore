import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { OrderRepository } from "./order.repository";
import { Order } from "./order";
import { RestDataSource } from "./rest.datasource";


@NgModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      ProductRepository,
      StaticDataSource,
      RestDataSource,
      OrderRepository,
      Order,
      Cart,
    ]
})
export class ModelModule {}
