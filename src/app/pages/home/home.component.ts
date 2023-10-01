import { Component } from '@angular/core';
import {Category} from "../../models/category";
import {Authors} from "../../models/authors";
import {NgForOf, NgIf} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CategoryblockComponent} from "../../components/category-block/categoryblock.component";
import {JoinOurTeamComponent} from "../../components/join-our-team/join-our-team.component";
import {ListOuthorsComponent} from "../../components/list-outhors/list-outhors.component";

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
    RouterModule
  ]
})
export class HomeComponent {

  dataCategory: Category[] = [
    {
      image: 'assets/Images/icons/business.png',
      title: 'Business',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      image: 'assets/Images/icons/startup.png',
      title: 'Startup',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      image: 'assets/Images/icons/economy.png',
      title: 'Economy',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      image: 'assets/Images/icons/technology.png',
      title: 'Technology',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    }
  ]

  dataAuthors: Authors[] = [
    {
      id: 1,
      image: 'assets/Images/user_img.png',
      name: 'Floyd Miles',
      description: 'Content Writer @Company'
    },
    {
      id: 2,
      image: 'assets/Images/user_img4.png',
      name: 'Dianne Russell',
      description: 'Content Writer @Company'
    },
    {
      id: 3,
      image: 'assets/Images/user_img3.png',
      name: 'Jenny Wilson',
      description: 'Content Writer @Company'
    },
    {
      id: 4,
      image: 'assets/Images/user_img2.png',
      name: 'Leslie Alexander',
      description: 'Content Writer @Company'
    }
  ]

  logos: string[] = [
    'assets/Images/logos/logos ipsum/Logo 1.png',
    'assets/Images/logos/logos ipsum/Logo 2.png',
    'assets/Images/logos/logos ipsum/Logo 3.png',
    'assets/Images/logos/logos ipsum/Logo 4.png',
    'assets/Images/logos/logos ipsum/Logo 5.png'
  ]
}
