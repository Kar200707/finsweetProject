import {Component, Input} from '@angular/core';
import {Posts} from "../../models/posts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  standalone: true,
  imports: []
})
export class PostsComponent {
  @Input() dataPosts!: Posts
}
