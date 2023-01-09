import { Component } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products=products;
//여기서 product는 데이터 받아오는 product. 타입이 아님.
share():void {
  alert('공유 됨')
}
onNotify() {
  alert('notify 버튼 실행')
}

}
