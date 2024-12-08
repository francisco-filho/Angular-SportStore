import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs";
import { Order } from "./order";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;

    constructor(private http: HttpClient){
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}`
    }

    get products(): Observable<Product[]>{
        return this.http.get<Product[]>(`${this.baseUrl}/products`);
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(`${this.baseUrl}/orders`, order)
    }

}