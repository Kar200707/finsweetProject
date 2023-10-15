import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category";
import {Posts} from "../../models/posts";
import {NgFor, NgIf} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CategoryblockComponent} from "../../components/category-block/categoryblock.component";
import {JoinOurTeamComponent} from "../../components/join-our-team/join-our-team.component";
import {PostsComponent} from "../../components/posts/posts.component";
import {LoaderBarComponent} from "../../components/loader-bar/loader-bar.component";
import {RequestService} from "../../services/request.service";
import {environment} from "../../environment/environment";
import {Authors} from "../../models/authors";

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
    NgIf,
    LoaderBarComponent
  ]
})
export class BlogComponent implements OnInit {
  dataCategory!: Category[];
  dataPosts!: Posts[];

  constructor(private reqServ: RequestService) {  }

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
  }
}
