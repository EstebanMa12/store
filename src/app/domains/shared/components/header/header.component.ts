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

  // Así se hace el cálculo del total de los productos del carrito
  // Sin problemas de rendimiento
  ngOnChanges(changes: SimpleChanges){
    if(changes['cart']){
      this.total.update(()=>this.getTotal());
    }

  }

  // Es recomendable no hacer un llamado a la función getTotal() en el template
  // Porque se ejecuta en cada ciclo de detección de cambios
  // Por lo que se puede hacer un cálculo del total de los productos del carrito
  // En el método ngOnChanges() y luego actualizar el total con el método update()
  
  getTotal(){
    return this.cart.reduce((acc, product) => acc + product.price, 0);
  }
}
