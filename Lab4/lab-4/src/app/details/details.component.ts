import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProdService } from '../prod.service';
import { Product } from '../product';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  template: `
    <article>
      <img class="product-photo" [src]="product?.image">
      <section class="product-description">
        <h2 class="product-heading">{{ product?.name }}</h2>
        <p class="product-price">{{ product?.price }} KZT</p>
        <p class="product-rating">Rating: {{ product?.rating }} / 5</p>
        <p class="product-description">{{ product?.description }}</p>
        <br>
        <button (click)="shareOnWhatsApp()">Share on WhatsApp</button>
        <button (click)="shareOnTelegram()">Share on Telegram</button>
      </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  prodService = inject(ProdService);
  product: Product | undefined;

  constructor() {
    const productId = Number(this.route.snapshot.params['id']);
    this.product = this.prodService.getProductById(productId);
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
