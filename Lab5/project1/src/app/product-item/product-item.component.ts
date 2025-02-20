import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class = "products">
      <img class = "product-photo" [src]="product.image" alt = "Photo of {{product.name}}">
      <h2 class = "product-heading">{{product.name}}</h2>
      <p class="product-price">{{product.price}} KZT</p>
      <p class="product-rating">Rating: {{ product.rating }} / 5</p>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-description">Likes: {{ product.likes }}</p>
      <br>
      <div class = "button-container">
      <button class = "like-button" (click)="increaseLikes()">Like ❤️</button>
      <button class = "remove-button" (click)="removeProduct()">Remove ❌</button>
      <br>
      <button class = "whatsapp-button" (click)="shareOnWhatsApp()">Share on WhatsApp</button>
      <button class = "telegram-button" (click)="shareOnTelegram()">Share on Telegram</button>
      </div>
    </section>
  `,
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<Product>();

  increaseLikes() {
    this.product.likes++;
  }

  removeProduct() {
    this.remove.emit(this.product);
  }
  shareOnWhatsApp() {
    if (this.product?.link) {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(this.product.link)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      console.warn("No product link available");
    }
  }

  shareOnTelegram() {
    if (this.product?.link) {
      const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}`;
      window.open(telegramUrl, '_blank');
    } else {
      console.warn("No product link available");
    }
  }
}
