import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private url = 'https://jsonplaceholder.typicode.com/albums';
  private albumsSubject = new BehaviorSubject<any[]>([]);
  albums$ = this.albumsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      tap(albums => this.albumsSubject.next(albums))
    );
  }

  getAlbumById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  updateAlbumBy(id: number, title: string): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, { title }).pipe(
      tap(() => {
        let albums = this.albumsSubject.getValue();
        const index = albums.findIndex(album => album.id === id);
        if (index !== -1) {
          albums[index] = { ...albums[index], title };
          this.albumsSubject.next([...albums]);
        }
      })
    );
  }

  deleteAlbumById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`).pipe(
      tap(() => {
        let albums = this.albumsSubject.getValue().filter(album => album.id !== id);
        this.albumsSubject.next([...albums]);
      })
    );
  }

  getAlbumPhotos(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  }
}
