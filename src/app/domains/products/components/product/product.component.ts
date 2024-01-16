import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../../shared/models/product.model';
// import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: Product;

  @Output() addToCart= new EventEmitter();

  addToCartHandler(){
    console.log('click from child');
    this.addToCart.emit('click from child' + this.product.title);

  }

}
