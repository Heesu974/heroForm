import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, products} from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
product: Product | undefined;

constructor(private route: ActivatedRoute){}

//activatedRoute에는 angular router가 로드한 개별 컴포넌트에 대한 정보를 담고 있다. 
//이 객체를 참조하면 해당 컴포넌트가 표시될 때 사용된 라우팅 규칙이나 라우팅 인자를 확인할 수 있다. 
//activatedRoute를 의존성으로 주입하면 이제 컴포넌트에서 이 서비스를 사용할 준비 완료.
//서비스를 이용해서 데이터를 다뤄봅시다.
ngOnInit(){
  //여기서 라우팅 인자로 전달된 productId를 참조하고, 이 값에 해당하는 상품을 products 배열 안에서 찾는다.
  //routeParams가 현재 route에서 product id를 찾아서 넣은 값.
  const routeParams = this.route.snapshot.paramMap;
  console.log('routeParams', routeParams)
  const productIdFromRoute = Number(routeParams.get('productId'));
  console.log('routeParams.get.productId', routeParams.get('productId'))
  
  this.product = products.find(product => product.id === productIdFromRoute)
  
  console.log(this.product)

}
}
