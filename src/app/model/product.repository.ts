import { Injectable, Signal, computed } from "@angular/core";
import { Product } from "./product.model";
import { StaticDatasource } from "./static.datasource";

@Injectable()
export class ProductRepository{
    products: Signal<Product[]>
    categories: Signal<string[]>

    public constructor(private datasource: StaticDatasource){
        this.products = this.datasource.products;
        this.categories = computed(() => {
            return this.products()
                .map(p => p.category ?? "(None)")
                .filter((el, i, array) => {
                    return array.indexOf(el) == i
                }).sort()
        })
    }

    public getProduct(id: number) : Product | undefined {
        return this.products().find(p => p.id === id)
    }
}