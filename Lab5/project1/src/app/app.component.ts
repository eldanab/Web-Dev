import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main class="heading"><h1>Online Shop</h1></main>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
}
