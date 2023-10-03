import {Component, Input} from '@angular/core';
import {Posts} from "../../models/posts";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  standalone: true,
  imports: [
    RouterModule
  ]
})
export class PostsComponent {
  @Input() dataPosts!: Posts
}
