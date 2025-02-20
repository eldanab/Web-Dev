import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Category } from "../category";
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <section class="results">
      <app-product-item
        *ngFor="let product of category?.productList"
        [product]="product"
        (remove)="removeProduct($event)">
      </app-product-item>
    </section>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  catService = inject(CategoryService);
  category?: Category;

  constructor() {
    this.route.paramMap.subscribe(params => {
      const categoryId = Number(params.get('id'));
      this.category = this.catService.getCategoryById(categoryId);
    });
  }

  removeProduct(product: Product) {
    if (this.category) {
      this.category.productList = this.category.productList.filter(p => p !== product);
    }
  }
}
