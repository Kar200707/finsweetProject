import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category";
import {Authors} from "../../models/authors";
import {NgForOf, NgIf} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CategoryblockComponent} from "../../components/category-block/categoryblock.component";
import {JoinOurTeamComponent} from "../../components/join-our-team/join-our-team.component";
import {ListOuthorsComponent} from "../../components/list-outhors/list-outhors.component";
import {LoaderBarComponent} from "../../components/loader-bar/loader-bar.component";
import {RequestService} from "../../services/request.service";
import {environment} from "../../environment/environment";
import {Posts} from "../../models/posts";

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
  dataPosts!: Posts[];
  dataAuthors!: Authors[];
  dataLogos!: string[];

  constructor(private reqServ: RequestService) { }

  ngOnInit():void {
    this.reqServ.getData<Category[]>(environment.category.get)
      .subscribe(
        (data: Category[]):void => {
          this.dataCategory = data;
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
          this.dataAuthors = data;
        }
      )

    this.reqServ.getData<string[]>(environment.logos.get)
      .subscribe(
        (data: string[]):void => {
          this.dataLogos = data;
        }
      )
  }

  protected readonly name = name;
}
