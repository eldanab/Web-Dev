import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product} from '../product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class = "products">
      <img class = "product-photo" [src]="product.image" alt = "Photo of {{product.name}}">
      <h2 class = "product-heading">{{product.name}}</h2>
      <p class="product-price">{{product.price}} KZT</p>
      <a [routerLink] = "['/details', product.id]" >Learn More</a>
    </section>
  `,
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;

}
