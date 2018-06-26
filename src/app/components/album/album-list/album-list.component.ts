import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../../services/album.service';
import { Album } from '../../../models/album..model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: Album[];

  constructor(
    private servA: AlbumService
  ) {
    this.servA.albums.subscribe(albums => {
      this.albums = albums;
    });
  }

  ngOnInit() {
  }
}
