import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {
  // Instantiate posts to an empty array
  posts: any = [];

  constructor(private postsService : PostsService) { }

  ngOnInit() {
    // Retrive posts from the API by calling the service
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
