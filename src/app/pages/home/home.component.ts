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
import {RequestService} from "../../services/request.service";
import {environment} from "../../environment/environment";

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
    LoaderBarComponent
  ]
})
export class HomeComponent implements OnInit {
  dataCategory!: Category[];
  dataAuthors!: Authors[];
  dataLogos!: string[];
  dataFeaturedPostLists!: FeaturedPostList[];


  constructor(private reqServ: RequestService) { }

  ngOnInit():void {
    this.reqServ.getData<Category[]>(environment.category.get)
      .subscribe(
        (data: Category[]):void => {
          this.dataCategory = data;
        }
      )

    this.reqServ.getData<Authors[]>(environment.author.get)
      .subscribe(
        (data: Authors[]):void => {
          this.dataAuthors = data;
        }
      )

    this.reqServ.getData<string[]>(environment.logos.get)
      .subscribe(
        (data: string[]):void => {
          this.dataLogos = data;
        }
      )

    this.reqServ.getData<FeaturedPostList[]>(environment.featuredPostLists.get)
      .subscribe(
        (data: FeaturedPostList[]):void => {
          this.dataFeaturedPostLists = data;
        }
      )
  }
}
