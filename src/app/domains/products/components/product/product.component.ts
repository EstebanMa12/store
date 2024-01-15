import { Component, Input, Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) img: string = '';
  @Input({required: true}) price: number = 0;
  @Input({required: true}) title: string = '';

  @Output() addToCart= new EventEmitter();

  addToCartHandler(){
    console.log('click from child');
    this.addToCart.emit('click from child');

  }

}
