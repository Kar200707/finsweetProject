import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category";
import {Posts} from "../../models/posts";
import {NgFor, NgIf} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CategoryblockComponent} from "../../components/category-block/categoryblock.component";
import {JoinOurTeamComponent} from "../../components/join-our-team/join-our-team.component";
import {PostsComponent} from "../../components/posts/posts.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoaderBarComponent} from "../../components/loader-bar/loader-bar.component";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: [
    './blog.component.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    NgFor,
    RouterModule,
    CategoryblockComponent,
    JoinOurTeamComponent,
    PostsComponent,
    HttpClientModule,
    NgIf,
    LoaderBarComponent
  ]
})
export class BlogComponent implements OnInit {
  dataCategory!: Category[];
  dataPosts!: Posts[];

  constructor(public http: HttpClient) {}

  ngOnInit():void {
    this.http.get(
      'http://localhost:3000/category'
    ).subscribe(
      (data:any):void => {
        this.dataCategory = data as Category[];
      }
    )

    this.http.get(
      'http://localhost:3000/posts'
    ).subscribe(
      (data:any):void => {
        this.dataPosts = data as Posts[];
      }
    )
  }

  // dataPosts: Posts[] = [
  //   {
  //     id: 1,
  //     category: 'Startup',
  //     title: 'Design tips for designers that cover everything you need',
  //     image: 'assets/Images/business_category_block_blog_img.png',
  //     description: `
  //       Duis aute irure dolor in reprehenderit in voluptate velit
  //       esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  //       occaecat cupidatat non proident.
  //     `
  //   },
  //   {
  //     id: 2,
  //     category: 'BUSINESS',
  //     title: 'How to build rapport with your web design clients',
  //     image: 'assets/Images/business_category_block_block_img(2).png',
  //     description: `
  //       Duis aute irure dolor in reprehenderit in voluptate velit
  //       esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  //       occaecat cupidatat non proident.
  //     `
  //   },
  //   {
  //     id: 3,
  //     category: 'Startup',
  //     title: 'Logo design trends to avoid in 2022',
  //     image: 'assets/Images/business_category_block_block_img(3).png',
  //     description: `
  //       Duis aute irure dolor in reprehenderit in voluptate velit
  //       esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  //       occaecat cupidatat non proident.
  //     `
  //   },
  //   {
  //     id: 4,
  //     category: 'TECHNOLOGY',
  //     title: '8 Figma design systems you can download for free today',
  //     image: 'assets/Images/business_category_block_block_img(4).png',
  //     description: `
  //       Duis aute irure dolor in reprehenderit in voluptate velit
  //       esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  //       occaecat cupidatat non proident.
  //     `
  //   },
  //   {
  //     id: 5,
  //     category: 'ECONOMY',
  //     title: 'Font sizes in UI design: The complete guide to follow',
  //     image: 'assets/Images/business_category_block_blog_img.png',
  //     description: `
  //       Duis aute irure dolor in reprehenderit in voluptate velit
  //       esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  //       occaecat cupidatat non proident.
  //     `
  //   }
  // ]
}
