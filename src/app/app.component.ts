import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import { AlbumService } from './services/album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private servP: PostService,
    private servA: AlbumService
  ) {
    this.servP.getPosts();
    this.servA.getAlbums();
  }

}
