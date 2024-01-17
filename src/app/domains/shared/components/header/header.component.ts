import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,
    RouterLinkWithHref,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal<boolean>(true);

  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState)
  }

  // Así se hace el cálculo del total de los productos del carrito
  // Sin problemas de rendimiento
  // ngOnChanges(changes: SimpleChanges){
  //   if(changes['cart']){
  //     this.total.update(()=>this.getTotal());
  //   }

  // }
  // Despues de utiliza el injection, se elimina el método ngOnChanges()
  // debido a que el total se calcula en el servicio CartService y no existe un input el cual se deba administrar


  // Es recomendable no hacer un llamado a la función getTotal() en el template
  // Porque se ejecuta en cada ciclo de detección de cambios
  // Por lo que se puede hacer un cálculo del total de los productos del carrito
  // En el método ngOnChanges() y luego actualizar el total con el método update()

  // como se obtiene el total desde el servicio no es necesario el método getTotal()
//   getTotal(){
//     return this.cart.reduce((acc, product) => acc + product.price, 0);
//   }
}
