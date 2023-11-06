import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";
import {RequestService} from "../../../services/request.service";
import {Category} from "../../../models/category";
import {environment} from "../../../../environment/environment";
import {MatButtonModule} from "@angular/material/button";
import {Posts} from "../../../models/posts";
import {NgForOf, NgIf} from "@angular/common";
import {Contact} from "../../../models/contact";
import {Authors} from "../../../models/authors";
import {Subscribe} from "../../../models/subscribe";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    RouterLink,
    MatButtonModule,
    NgIf,
    NgForOf
  ]
})

export class DashboardComponent implements OnInit{
  dataCategory!: Category[];
  dataSubscribe!: Subscribe[];
  dataPosts!: Posts[];
  dataContact!: Contact[];
  userData: Authors = JSON.parse(localStorage.getItem('userData') ?? 'null').user;
  constructor(public reqServ: RequestService) {  }
  ngOnInit():void {
    this.reqServ.getData<Contact[]>(environment.contactUs.get)
      .subscribe((data: Contact[]):void=>{
        this.dataContact = data;
      })

    this.reqServ.getData<Category[]>(environment.category.get)
      .subscribe((data:Category[]):void =>{
        this.dataCategory = data
      })

    this.reqServ.getData<Subscribe[]>(environment.subscribe.get)
      .subscribe((data:Subscribe[]):void =>{
        this.dataSubscribe = data
      })

    this.reqServ.getData<Posts[]>(
      this.userData.superAdmin === 'true'
        ? environment.posts.get
        : environment.posts.get + '?user_id=' + this.userData.id
    )
      .subscribe((data:Posts[]):void =>{
        this.dataPosts = data
      })
  }
}
