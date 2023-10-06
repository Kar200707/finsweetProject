import {Component, OnInit} from '@angular/core';
import {Authors} from "../../models/authors";
import {NgFor, NgIf} from "@angular/common";
import {JoinOurTeamComponent} from "../../components/join-our-team/join-our-team.component";
import {ListOuthorsComponent} from "../../components/list-outhors/list-outhors.component";
import {LoaderBarComponent} from "../../components/loader-bar/loader-bar.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";

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
    HttpClientModule,
    NgIf
  ]
})
export class AboutUsComponent implements OnInit{
  dataAuthors!: Authors[]

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get(
      'http://localhost:3000/author'
    ).subscribe(
      (data:any):void => {
        this.dataAuthors = data as Authors[];
      }
    )
  }
}
