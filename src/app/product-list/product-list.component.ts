import { Component } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products=products;
share():void {
  alert('공유 됨')
}
onNotify(){
  alert('알림 신청 완료')
}
}
