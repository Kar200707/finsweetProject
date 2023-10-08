import {Component, OnInit} from '@angular/core';
import {Authors} from "../../models/authors";
import {NgFor, NgIf} from "@angular/common";
import {JoinOurTeamComponent} from "../../components/join-our-team/join-our-team.component";
import {ListOuthorsComponent} from "../../components/list-outhors/list-outhors.component";
import {LoaderBarComponent} from "../../components/loader-bar/loader-bar.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RequestService} from "../../services/request.service";
import {Posts} from "../../models/posts";
import {environment} from "../../environment/environment";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: [
    './about-us.component.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    NgFor,
    JoinOurTeamComponent,
    ListOuthorsComponent,
    LoaderBarComponent,
    NgIf
  ]
})
export class AboutUsComponent implements OnInit{
  dataAuthors!: Authors[]

  constructor(private reqServ: RequestService) { }

  ngOnInit():void {
    this.reqServ.getData<Authors[]>(environment.author.get)
      .subscribe(
        (data: Authors[]):void => {
          this.dataAuthors = data;
        }
      )
  }
}
