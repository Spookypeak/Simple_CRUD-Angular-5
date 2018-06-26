import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: []
})
export class PostComponent implements OnInit {
  @Input() post;
  @Input() i;

  selected: number;

  constructor(private servP: PostService) {
    servP.selected.subscribe(selected => this.selected = selected);
  }

  ngOnInit() {
  }

  verPost(idx:number){
    this.servP.selected.next(idx);
  }
}
