import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <img src = "cover.jpg">
    <section>
    <h1>Welcome to Albums Web-Page!</h1>
    <p>Explore albums, view details and check out photos.</p>
    <nav>
      <a routerLink="/albums">View Albums</a> |
      <a routerLink="/about">About Us</a>
    </nav>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
