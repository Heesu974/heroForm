import { Component } from '@angular/core';
import {Product, products} from '../product';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items: Product[] = this.cartService.getItems();

  constructor(
    private cartService: CartService,
  ){}





}

//장바구니 목록 표시

//여기서 items 뿌려줘야 하는데 ?
