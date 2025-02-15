import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent} from '../product/product.component';
import { Product } from '../product';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  template: `
    <section>
<!--      <form>-->
<!--        <input type="text" placeholder="Search by name...">-->
<!--        <button class = "primary" type="button">Search</button>-->
<!--      </form>-->
    </section>
    <section class = "results">
      <app-product *ngFor="let product of productsList" [product] = "product"></app-product>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productsList: Product[] = [];
  prodService: ProdService = inject(ProdService);

  constructor() {
    this.productsList = this.prodService.getAllProducts()
  }
}
