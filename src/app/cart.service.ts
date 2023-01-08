import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  items: Product[]=[];

  addToCart(product:Product){
    this.items.push(product);
  }

  getItems(product:Product){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
}
