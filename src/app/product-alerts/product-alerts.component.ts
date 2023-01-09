import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product! :Product;
  @Output() notify = new EventEmitter();


  //eventemitter는 이벤트 감지기.
  //button이 클릭되면, notify라는 이벤트 감지기가 부모 컴포넌트에 이벤트가 감지되었음을 알림.


}

//구현: 상품의 가격을 검사해서 가격이 $700 이상이면, notify component 생성
