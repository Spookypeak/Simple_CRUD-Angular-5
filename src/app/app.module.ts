//MODULES

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//ROUTES

import { BaseRoutes } from './routes';

//COMPONENTS

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PostComponent } from './components/post/post/post.component';
import { AlbumListComponent } from './components/album/album-list/album-list.component';
import { AlbumComponent } from './components/album/album/album.component';

//SERVICES
import { PostService } from './services/post.service';
import { AlbumService } from './services/album.service';
import { PostDetailComponent } from './components/post/post-detail/post-detail.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { AlbumDetailsComponent } from './components/album/album-details/album-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AlbumListComponent,
    PostComponent,
    PostListComponent,
    AlbumComponent,
    PostDetailComponent,
    AlbumDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BaseRoutes,
    FormsModule
  ],
  providers: [
    PostService,
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
