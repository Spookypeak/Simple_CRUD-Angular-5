import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class PostService {

  posts = new BehaviorSubject<any>(null);
  selected = new BehaviorSubject<number>(0);

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(
        (res) => {
          this.posts.next(res);
        }
      );
  }
}
