import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import {FormBuilder} from '@angular/forms';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
    ){}

    //사용자의 이름과 주소를 받으려면,
    //1. FormBuilder group() 메서드로 name과 address 필드가 있는 폼 모델 생성
    //2. checkoutForm 프로퍼티에 할당

   checkoutForm = this.formBuilder.group({
    name: '',
    address:'',
   })

   //3. 폼을 처리하는 onSubmit() 메서드 정의. 
   //onSubmit 메서드는 사용자가 입력한 이름과 주소를 제출하는 동작.
   //이 메서드는 사용자가 입력한 이름과 주소를 제출하는 동작을 한다.
   //그리고 cartservice의 clearcart 메서드를 사용해서 폼을 초기화하고 장바구니를 비운다. 

   onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
   }
  

}
