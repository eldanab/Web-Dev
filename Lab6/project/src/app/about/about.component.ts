import { Component } from '@angular/core';
import {RouterLink } from "@angular/router";

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  template: `
    <h1>About Album Web Application</h1>
    <p>On this application you can do create/read/update/delete operations for albums.</p>
    <p>Done by: <em>Balseit Eldana</em> for <em>Lab6</em></p>

    <nav><a routerLink="/home">Go Home</a></nav>

  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
