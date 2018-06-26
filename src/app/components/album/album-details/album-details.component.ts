import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../../services/album.service';
import { Album } from '../../../models/album..model';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  album: Album;

  constructor(private servA: AlbumService) { }

  ngOnInit() {
    if (this.servA.albums.value)
      this.album = this.servA.albums.value[this.servA.selected.value];
  }

  guardarAlbum() {
    this.servA.selected.next(0);
  }

  eliminarAlbum() {
    this.servA.albums.value.splice(this.servA.selected.value, 1);
  }

}
