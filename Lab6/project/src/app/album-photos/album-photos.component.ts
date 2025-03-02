import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule ],
  template: `
    <h2>Photos</h2>
    <div class="photos-container">
      <div *ngFor="let photo of photos">
        <img [src]="photo.thumbnailUrl" [alt]="photo.title" />
      </div>
    </div>
    <button (click)="goBack()">Return</button>

  `,
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  photos: any[] = [];

  constructor(private route: ActivatedRoute, private service: AlbumsService, private router: Router) { }

  ngOnInit(): void {
    const albumId = this.route.snapshot.params['id'];
    this.service.getAlbumPhotos(albumId).subscribe(photos => {
      this.photos = photos;
    })
  }

  goBack(): void {
    this.router.navigate(['/albums', this.route.snapshot.params['id']]);
  }
}
