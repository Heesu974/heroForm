import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, products} from '../product';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
product: Product | undefined;

constructor(
  private route: ActivatedRoute,
  private cartService: CartService,
  
  ){}
addToCart(product: Product){
  this.cartService.addToCart(product);
  window.alert('your product has been added to the cart')
}

ngOnInit(){

  const routeParams = this.route.snapshot.paramMap;
  console.log('routeParams', routeParams)
  const productIdFromRoute = Number(routeParams.get('productId'));
  console.log('routeParams.get.productId', routeParams.get('productId'))
  
  this.product = products.find(product => product.id === productIdFromRoute)
  
  console.log(this.product)

}
}
