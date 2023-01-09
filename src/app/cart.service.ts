import { Injectable } from '@angular/core';
import {Product} from './product';
//Product interface 로드

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[]= [];
  constructor() { }


  //장바구니 관련 method 생성.

  addToCart(product:Product){
    this.items.push(product);
    console.log('cartService에 담긴 아이템',this.items);
    return;
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}
