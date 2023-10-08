import {Component, OnInit} from '@angular/core';
import {Posts} from "../../models/posts";
import {NgFor, NgIf} from "@angular/common";
import {PostsComponent} from "../../components/posts/posts.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoaderBarComponent} from "../../components/loader-bar/loader-bar.component";
import {FeaturedPostList} from "../../models/featured-post-list";
import {Category} from "../../models/category";
import {RequestService} from "../../services/request.service";
import {environment} from "../../environment/environment";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: [
    './category.component.css',
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
export class CategoryComponent implements OnInit{
  dataPosts!: Posts[];

  constructor(private reqServ: RequestService) { }

  ngOnInit():void {
    this.reqServ.getData<Posts[]>(environment.categoryPosts.get)
      .subscribe(
        (data: Posts[]):void => {
          this.dataPosts = data;
        }
      )
  }
}
