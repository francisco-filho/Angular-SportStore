import { Injectable, Signal, computed } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable()
export class ProductRepository{
    products: Signal<Product[]>
    categories: Signal<string[]>

    public constructor(private datasource: RestDataSource){
        this.products = toSignal(this.datasource.products, 
            { initialValue: []});
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