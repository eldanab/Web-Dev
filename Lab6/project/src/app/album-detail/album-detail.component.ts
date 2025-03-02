import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  imports: [RouterLink, FormsModule],
  template: `
    <h1>{{album.title}}</h1>
    <a [routerLink] = "['/albums', album.id, 'photos']">Photos</a>
    <p>Change title if needed: <input [(ngModel)]= "newTitle"/></p>
    <button (click)="saveChanges()">Save</button>
    <button (click)="goBack()">Back</button>
  `,
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: any = {};
  newTitle: string = '';

  constructor(private route: ActivatedRoute, private service: AlbumsService, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.service.albums$.subscribe(albums => {
      const foundAlbum = albums.find(album => album.id === id);
      if (foundAlbum) {
        this.album = foundAlbum;
        this.newTitle = foundAlbum.title;
      } else {
        this.service.getAlbumById(id).subscribe(album => {
          this.album = album;
          this.newTitle = album.title;
        });
      }
    });
  }


  saveChanges(): void {
    if (this.newTitle.trim()) {
      this.service.updateAlbumBy(this.album.id, this.newTitle).subscribe(() => {
        this.album.title = this.newTitle;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
