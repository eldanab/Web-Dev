import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  imports: [RouterLink,  CommonModule],
  standalone: true,
  template: `
    <section><h2>List Of Albums</h2>
    <div class = "container"><ul>
      <li *ngFor="let album of albums">
        <a [routerLink]="['/albums', album.id]">{{ album.title }}</a>
        <button class = "delete" (click)="deleteAlbum(album.id)">Delete</button>
      </li>
    </ul></div>
    <button class="goBack" (click)="goBack()">Back</button></section>

  `,
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit() {
    this.albumsService.albums$.subscribe(albums => {
      this.albums = albums;
    });

    if (this.albums.length === 0) {
      this.albumsService.getAlbums().subscribe();
    }
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbumById(id).subscribe();
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
