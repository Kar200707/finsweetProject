import { Component } from '@angular/core';
import {JoinOurTeamComponent} from "../../components/join-our-team/join-our-team.component";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: [
    './blog-post.component.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    JoinOurTeamComponent,
  ]
})
export class BlogPostComponent {

}
