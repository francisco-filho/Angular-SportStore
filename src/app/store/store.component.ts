import { Component, Signal, signal, computed } from "@angular/core"
import { Product } from "../model/product.model"
import { ProductRepository } from "../model/product.repository"

@Component({
    selector: "store",
    templateUrl: "store.component.html",
})
export class StoreComponent {
    products: Signal<Product[]>
    categories: Signal<string[]>
    selectedCategory = signal<string | undefined>(undefined)

    productsPerPage = signal(3);
    selectedPage = signal(1);
    pagedProducts: Signal<Product[]>;
    pageNumbers: Signal<number[]>;

    constructor(private repository: ProductRepository){
        this.products = computed(() => {
            if (this.selectedCategory() == undefined){
                return this.repository.products()
            } else {
                return this.repository.products().filter(p => {
                    return p.category == this.selectedCategory()
                })
            }
        })

        let pageIndex = computed(() => {
            return (this.selectedPage() - 1) * this.productsPerPage()
        })

        this.pagedProducts = computed(() => {
            return this.products().slice(
                pageIndex(), 
                pageIndex() + this.productsPerPage())
        })

        this.pageNumbers = computed(() => {
            return Array(Math.ceil(this.products().length / this.productsPerPage()))
                .fill(0)
                .map((n, i) => i + 1)
        })

        this.categories = this.repository.categories
    }

    changePage(newPage: number){
       this.selectedPage.set(newPage) 
       console.log('page', newPage)
    }

    changePageSize(newSize: Number){
        this.productsPerPage.set(Number(newSize))
        this.changePage(1)
        console.log('size', newSize)
    }

    changeCategory(category?: string | undefined){
        this.selectedCategory.set(category)
        this.changePage(1)
    }
}