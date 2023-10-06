import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category";
import {Authors} from "../../models/authors";
import {NgForOf, NgIf} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CategoryblockComponent} from "../../components/category-block/categoryblock.component";
import {JoinOurTeamComponent} from "../../components/join-our-team/join-our-team.component";
import {ListOuthorsComponent} from "../../components/list-outhors/list-outhors.component";
import {HttpClient, HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {FeaturedPostList} from "../../models/featured-post-list";
import {LoaderBarComponent} from "../../components/loader-bar/loader-bar.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    JoinOurTeamComponent,
    ListOuthorsComponent,
    CategoryblockComponent,
    NgIf,
    NgForOf,
    RouterModule,
    HttpClientModule,
    LoaderBarComponent
  ]
})
export class HomeComponent implements OnInit {
  dataCategory!: Category[];
  dataAuthors!: Authors[];
  dataLogos!: string[];
  dataFeaturedPostLists!: FeaturedPostList[];


  constructor(public http: HttpClient) { }

  ngOnInit():void {
    this.http.get(
      'http://localhost:3000/category'
    ).subscribe(
      (data:any):void => {
        this.dataCategory = data as Category[];
      }
    )

    this.http.get(
      'http://localhost:3000/author'
    ).subscribe(
      (data:any):void => {
        this.dataAuthors = data as Authors[];
      }
    )

    this.http.get(
      'http://localhost:3000/logos'
    ).subscribe(
      (data:any):void => {
        this.dataLogos = data as string[];
      }
    )

    this.http.get(
      'http://localhost:3000/featuredPostLists'
    ).subscribe(
      (data:any):void => {
        this.dataFeaturedPostLists = data as FeaturedPostList[];
      }
    )
  }
}
