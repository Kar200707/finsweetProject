import {Component, OnInit} from '@angular/core';
import {Posts} from "../../models/posts";
import {NgFor, NgIf} from "@angular/common";
import {PostsComponent} from "../../components/posts/posts.component";
import {LoaderBarComponent} from "../../components/loader-bar/loader-bar.component";
import {RequestService} from "../../services/request.service";
import {environment} from "../../../environment/environment";
import {Authors} from "../../models/authors";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: [
    './author.component.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    NgFor,
    PostsComponent,
    LoaderBarComponent,
    NgIf
  ]
})
export class AuthorComponent implements OnInit{
  id: number = 0;
  dataAuthor!: Authors;
  dataPosts: Posts[] = [];
  authorImage!: string;
  authorTitle!: string;
  authorBio!: string;
  authorFaceBook!: string;
  authorTwitter!: string;
  authorInsta!: string;
  authorLinkedin!: string;
  constructor(private reqServ: RequestService, private route: ActivatedRoute) {

  }

  ngOnInit():void {
    this.route.params.subscribe((params: any):void => {
      this.id = params.id
    })

    this.reqServ.getData<Authors>(environment.author.get + '/' + this.id)
      .subscribe(
        (data: Authors):void => {
          this.dataAuthor = data;
          this.authorImage = data.image;
          this.authorTitle = data.title;
          this.authorBio = data.bio;
          this.authorFaceBook = data.facebook;
          this.authorTwitter = data.twitter;
          this.authorInsta = data.instagram;
          this.authorLinkedin = data.linkedin;

          this.reqServ.getData<Posts[]>(environment.posts.get + '?user_id=' + data.id)
            .subscribe((posts:Posts[]):void => {
              this.dataPosts = posts;
            })
        }
      )
  }
}
