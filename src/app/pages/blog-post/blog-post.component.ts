import {Component, OnInit} from '@angular/core';
import {JoinOurTeamComponent} from "../../components/join-our-team/join-our-team.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../services/request.service";
import {Authors} from "../../models/authors";
import {environment} from "../../environment/environment";
import {Posts} from "../../models/posts";
import {NgIf} from "@angular/common";

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
    NgIf,
  ]
})
export class BlogPostComponent implements OnInit{
  id:number = 1;
  dataAuthor!: Authors;
  dataPosts!: Posts;

  constructor(private route: ActivatedRoute, private reqServ: RequestService) {  }

  ngOnInit():void {
    this.route.params.subscribe((params: any):void => {
      this.id = params.id
    })

    this.reqServ.getData<Posts>(environment.posts.get + '/' + this.id)
      .subscribe((data:Posts):void=>{
        this.dataPosts = data
        this.reqServ.getData<Authors>(environment.author.get + '/' + (this.dataPosts.user_id))
          .subscribe((author:Authors):void=>{
            this.dataAuthor = author;
          })
      })
  }
}
