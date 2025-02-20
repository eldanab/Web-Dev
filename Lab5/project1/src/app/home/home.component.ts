import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Category} from '../category';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  template: `
    <section class = "cat-section">
      <h2 class="all-categ">All categories</h2>
      <ul class = "category-list">
        <li class = "list-element" *ngFor="let category of categories">
          <a class = "category-element" [routerLink]="['/productList', category.id]">{{ category.name }}</a>
        </li>
      </ul>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    console.log('Categories:', this.categories); // Debugging output
  }
}
