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
import {Authors} from "../../models/authors";

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
  dataAuthor!: Authors[];
  dataCategory!: Category[];
  isSelectCategory:any = [];
  title: string = 'loading...';
  description: string = 'loading...';
  id:number = 0;
  apicategory: string = '';

  constructor(private reqServ: RequestService, private api: ActivatedRoute) {  }

  ngOnInit():void {
    this.api.params.subscribe((params:any):void => {
      this.id = params.id
    })

    this.reqServ.getData<Category[]>(environment.category.get)
        .subscribe(
            (data: Category[]):void => {
              this.dataCategory = data

              for (let i = 0; i < data.length; i++) {
                this.isSelectCategory[i] = {
                  cat: data[i].title,
                  isSelect: false,
                }
              }
            }
        )

    this.reqServ.getData<Category>(environment.category.get + '/' + this.id)
      .subscribe(
        (data: Category):void => {
          this.title = data.title
          this.description = data.description

          this.isSelectCategory.forEach((item: any, index: number):void => {
            if (this.title == item.cat) {
              this.isSelectCategory[index].isSelect = true;
              this.apicategory = this.title.toUpperCase()
              this.reqServ.getData<Posts[]>(environment.posts.get + '?category=' + this.apicategory)
                  .subscribe((data: Posts[]):void => {
                    this.dataPosts = data
                  })
            }
          })
        }
      )

    this.reqServ.getData<Posts[]>(environment.posts.get)
      .subscribe(
        (data: Posts[]):void => {
          this.dataPosts = data;
        }
      )

    this.reqServ.getData<Authors[]>(environment.author.get)
      .subscribe(
        (data: Authors[]):void => {
          this.dataAuthor = data;
        }
      )
  }

  chooseCategory (category: string, index: number):void {
    let urlStart: string = '?category=';

    if (category === this.dataCategory[index].title) {
      this.isSelectCategory[index] = {
        cat: category,
        isSelect: (this.title == this.isSelectCategory[index].cat ? true : !this.isSelectCategory[index]?.isSelect) ,
      }

      if (this.apicategory === '') {
        this.apicategory = category.toUpperCase();
      } else {
        this.apicategory = '';
        for (let i:number = 0; i < this.isSelectCategory.length; i++) {
          if (this.isSelectCategory[i].isSelect) {
            this.apicategory += '&' + 'category=' + this.isSelectCategory[i].cat.toUpperCase();
          }
        }
      }

      this.reqServ.getData<Posts[]>(environment.posts.get + urlStart + this.apicategory)
          .subscribe((data: Posts[]):void => {
            this.dataPosts = data
          })
    }
  }
}
