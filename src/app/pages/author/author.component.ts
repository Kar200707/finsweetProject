import {Component, OnInit} from '@angular/core';
import {Posts} from "../../models/posts";
import {NgFor, NgIf} from "@angular/common";
import {PostsComponent} from "../../components/posts/posts.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoaderBarComponent} from "../../components/loader-bar/loader-bar.component";
import {RequestService} from "../../services/request.service";
import {environment} from "../../environment/environment";

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
  dataPosts!: Posts[];
  constructor(private reqServ: RequestService) { }

  ngOnInit():void {
    this.reqServ.getData<Posts[]>(environment.authorPosts.get)
      .subscribe(
        (data: Posts[]):void => {
          this.dataPosts = data;
        }
      )
  }
}
