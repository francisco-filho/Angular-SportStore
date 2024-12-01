import {Injectable, Signal, signal, computed, WritableSignal} from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class Cart {
  private linesSignal : WritableSignal<CartLine[]>;
  public summary: Signal<CartSummary>;

  constructor(){
    this.linesSignal = signal([])

    this.summary = computed(() => {
      let s = new CartSummary()
      this.linesSignal().forEach(line => {
        s.itemCount += line.quantity
        s.cartPrice += line.lineTotal
      })
      return s;
    })
  }

  get lines(){
    return this.linesSignal.asReadonly();
  }

  addLine(product: Product, quantity: number = 1){
    this.linesSignal.mutate(cartLines => {
      let item = cartLines.find(e => e.product.id == product.id)
      if (item != undefined){
        item.quantity += Number(quantity)
      } else {
        cartLines.push(new CartLine(product, quantity))
      }
    })
  }

  updateQuantity(product: Product, quantity: number){
    this.linesSignal.mutate(cartLines => {
      let item = cartLines.find(p => p.product.id == product.id)
      if (item != undefined){
        item.quantity = Number(quantity)
      }
    })
  }

  removeLine(id: number){
    this.linesSignal.mutate(cartLines => {
      let itemIdx = cartLines.findIndex(p => p.product.id == id)
      if (itemIdx >= 0){
        cartLines.splice(itemIdx, 1)
      }
    })
  }

  clear(){
      this.linesSignal.set([])
  }

  isEmpty(){
    return this.summary().itemCount == 0
  }
}

export class CartLine {
  constructor(public product: Product, public quantity: number){}

  get lineTotal() {
    return this.quantity * (this.product.price ?? 0)
  }
}

export class CartSummary {
  itemCount : number = 0;
  cartPrice : number = 0;
}
