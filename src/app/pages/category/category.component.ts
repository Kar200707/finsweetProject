import {Component, OnInit} from '@angular/core';
import {Posts} from "../../models/posts";
import {NgFor, NgIf} from "@angular/common";
import {PostsComponent} from "../../components/posts/posts.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoaderBarComponent} from "../../components/loader-bar/loader-bar.component";
import {FeaturedPostList} from "../../models/featured-post-list";

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
    HttpClientModule,
    LoaderBarComponent,
    NgIf
  ]
})
export class CategoryComponent implements OnInit{
  dataPosts!: Posts[];

  constructor(public http: HttpClient) { }

  ngOnInit():void {
    this.http.get(
      'http://localhost:3000/category-posts'
    ).subscribe(
      (data:any):void => {
        this.dataPosts = data as Posts[];
      }
    )
  }
}
