import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;

  constructor(private servP: PostService) {

  }

  ngOnInit() {
    if (this.servP.posts.value)
      this.post = this.servP.posts.value[this.servP.selected.value];
  }

  guardarPost() {
    this.servP.selected.next(0);
  }

  eliminarPost() {
    this.servP.posts.value.splice(this.servP.selected.value, 1);
  }

}
