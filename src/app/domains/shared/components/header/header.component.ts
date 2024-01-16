import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input({required:true}) cart:Product[] = [];

  hideSideMenu = signal<boolean>(true);
  total = signal<number>(0);

  toggleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState)
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['cart']){
      this.total.update(()=>this.getTotal());
    }

  }
  getTotal(){
    return this.cart.reduce((acc, product) => acc + product.price, 0);
  }
}
