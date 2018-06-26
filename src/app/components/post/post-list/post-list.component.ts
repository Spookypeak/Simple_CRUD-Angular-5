import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/post.model';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: []
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(
    private servP: PostService
    ) {
    this.servP.posts.subscribe(posts => this.posts = posts);
  }

  ngOnInit() {
  }
}
