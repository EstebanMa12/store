import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]);
  cart= signal<Product[]>([]);

  constructor(){
    const initProducts:Product[] = [
      {
        id: 1,
        title: 'Producto 1',
        price: 100,
        image: 'https://picsum.photos/640/640?random=1',
        createdAt: new Date()
      },
      {
        id: 2,
        title: 'Producto 2',
        price: 200,
        image: 'https://picsum.photos/640/640?random=2',
        createdAt: new Date()
      },
      {
        id: 3,
        title: 'Producto 3',
        price: 300,
        image: 'https://picsum.photos/640/640?random=3',
        createdAt: new Date()
      },
      {
        id: 4,
        title: 'Producto 4',
        price: 400,
        image: 'https://picsum.photos/640/640?random=4',
        createdAt: new Date()
      },
      {
        id: 5,
        title: 'Producto 5',
        price: 500,
        image: 'https://picsum.photos/640/640?random=5',
        createdAt: new Date()
      },
      {
        id: 6,
        title: 'Producto 6',
        price: 600,
        image: 'https://picsum.photos/640/640?random=6',
        createdAt: new Date()
      },
      {
        id: 7,
        title: 'Producto 7',
        price: 700,
        image: 'https://picsum.photos/640/640?random=7',
        createdAt: new Date()
      },
      {
        id: 8,
        title: 'Producto 8',
        price: 800,
        image: 'https://picsum.photos/640/640?random=8',
        createdAt: new Date()
      },
      {
        id: 9,
        title: 'Producto 9',
        price: 900,
        image: 'https://picsum.photos/640/640?random=9',
        createdAt: new Date()
      },
      {
        id: 10,
        title: 'Producto 10',
        price: 1000,
        image: 'https://picsum.photos/640/640?random=10',
        createdAt: new Date()
      },
    ];
    this.products.set(initProducts);
  }
  // Leyendo el output del hijo
  addToCart(product:Product){
    this.cart.update(prevState => [...prevState, product])

  }


}
