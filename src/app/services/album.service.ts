import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Album } from '../models/album..model';


@Injectable()
export class AlbumService {

  albums = new BehaviorSubject<Album[]>(null);
  selected = new BehaviorSubject<number>(0);
  constructor(
    private http: HttpClient
  ) { }


  getAlbums() {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe((res) => {
        this.albums.next((<Album[]>res).splice(0, 50));
      });
  }
}
