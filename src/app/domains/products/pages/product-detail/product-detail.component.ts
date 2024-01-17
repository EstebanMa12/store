import { Product } from './../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input() id?: string;
  product = signal<Product | null >(null);

  private productService = inject(ProductService);

  ngOnInit(){
    if(this.id){
      this.productService.getOneProduct(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
        },
        error: (err) => console.error(err),
      });
    }
  }

}
