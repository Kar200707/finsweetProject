import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Posts} from "../../models/posts";
import {NgFor, NgIf} from "@angular/common";
import {PostsComponent} from "../../components/posts/posts.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoaderBarComponent} from "../../components/loader-bar/loader-bar.component";
import {FeaturedPostList} from "../../models/featured-post-list";
import {Category} from "../../models/category";
import {RequestService} from "../../services/request.service";
import {environment} from "../../environment/environment";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

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
  title: string = 'loading...';
  description: string = 'loading...';
  id:number = 1;
  isStartup:string = '';
  isBusiness:string = '';
  isEconomy:string = '';
  isTechnology:string = '';

  constructor(private reqServ: RequestService, private api: ActivatedRoute) {  }

  ngOnInit():void {
    this.api.params.subscribe((params:any):void => {
      this.id = params.id
    })

    this.reqServ.getData<Category>(environment.category.get + '/' + this.id)
      .subscribe(
        (data: Category):void => {
          this.title = data.title
          this.description = data.description
        }
      )

    this.reqServ.getData<Posts[]>(environment.categoryPosts.get)
      .subscribe(
        (data: Posts[]):void => {
          this.dataPosts = data;
          this.chooseCategory(this.title.toLowerCase())
        }
      )
  }

  chooseCategory (category: string):void {
    if (category === "startup") {
      if (this.isStartup === '') {
        this.isStartup = 'category=Startup';
      } else {
        this.isStartup = '';
      }

      this.reqServ.getData<Posts[]>(
        environment.categoryPosts.get
        + '?'
        + this.isStartup
        + (this.isStartup == '' ? '' : '&')
        + this.isBusiness
        + '&'
        + this.isTechnology
        + '&'
        + this.isEconomy
      )
        .subscribe(
          (data: Posts[]):void => {
            this.dataPosts = data;
          }
        )
    }

    if (category === "business") {
      if (this.isBusiness === '') {
        this.isBusiness = 'category=BUSINESS';
      } else {
        this.isBusiness = '';
      }


      this.reqServ.getData<Posts[]>(
        environment.categoryPosts.get
        + '?'
        + this.isStartup
        + '&'
        + this.isBusiness
        + '&'
        + this.isTechnology
        + '&'
        + this.isEconomy
      )
        .subscribe(
          (data: Posts[]):void => {
            this.dataPosts = data;
          }
        )
    }

    if (category === "economy") {
      if (this.isEconomy === '') {
        this.isEconomy = 'category=Economy';
      } else {
        this.isEconomy = '';
      }


      this.reqServ.getData<Posts[]>(
        environment.categoryPosts.get
        + '?'
        + this.isStartup
        + '&'
        + this.isBusiness
        + '&'
        + this.isEconomy
        + '&'
        + this.isTechnology
      )
        .subscribe(
          (data: Posts[]):void => {
            this.dataPosts = data;
          }
        )
    }

    if (category === "technology") {
      if (this.isTechnology === '') {
        this.isTechnology = 'category=Technology';
      } else {
        this.isTechnology = '';
      }


      this.reqServ.getData<Posts[]>(
        environment.categoryPosts.get
        + '?'
        + this.isStartup
        + '&'
        + this.isBusiness
        + '&'
        + this.isEconomy
        + '&'
        + this.isTechnology
      )
        .subscribe(
          (data: Posts[]):void => {
            this.dataPosts = data;
          }
        )
    }
  }
}
