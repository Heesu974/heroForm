import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {Product, products} from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

product: Product | undefined;

//먼저 constructor()(생성자) 안에 activatedRoute 인스턴스를 주입.
constructor(
  private route: ActivatedRoute

){}

ngOnInit() {
  const routeParams = this.route.snapshot.paramMap;
  //여기서 product id를 얻는다. current route로 부터
  const productIdFromRoute = Number(routeParams.get('productId'));

  //find the product that correspond with the id provided in route
  this.product = products.find(product => product.id === productIdFromRoute);
}
}

//angular rotuer가 제공하는 activatedRoute와 Router, paramMap을 통해 url로부터 필요한 정보 추출 가능
