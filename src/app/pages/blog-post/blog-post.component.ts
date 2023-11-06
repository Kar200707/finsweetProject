import {Component, OnInit} from '@angular/core';
import {JoinOurTeamComponent} from "../../components/join-our-team/join-our-team.component";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {RequestService} from "../../services/request.service";
import {Authors} from "../../models/authors";
import {environment} from "../../../environment/environment";
import {Posts} from "../../models/posts";
import {NgForOf, NgIf} from "@angular/common";

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
    NgForOf,
    RouterLink,
  ]
})
export class BlogPostComponent implements OnInit{
  id:number = 1;
  dataAuthor!: Authors;
  dataPosts!: Posts;
  dataPostsMorePosts!: Posts[];
  dataAuthorsMorePosts!: Authors[];
  isNotPage: boolean = true;

  constructor(private route: ActivatedRoute, private reqServ: RequestService) {  }

  ngOnInit():void {
    this.route.params.subscribe((params: any):void => {
      this.id = params.id
    })

    this.reqServ.getData<Posts>(environment.posts.get + '/' + this.id)
      .subscribe((data:Posts):void=>{
        this.dataPosts = data
        this.isNotPage = true;
        this.reqServ.getData<Authors>(environment.author.get + '/' + (this.dataPosts.user_id))
          .subscribe((author:Authors):void => {
              this.dataAuthor = author;
            }
          )
      },
      ():void =>{
        this.isNotPage = false;
      })

    this.reqServ.getData<Posts[]>(environment.posts.get)
      .subscribe((data:Posts[]):void => {
        this.dataPostsMorePosts = data;
      })

    this.reqServ.getData<Authors[]>(environment.author.get)
      .subscribe((data:Authors[]):void => {
        this.dataAuthorsMorePosts = data;
      })
  }
}
