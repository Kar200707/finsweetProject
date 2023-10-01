import { Component } from '@angular/core';
import {Authors} from "../../models/authors";
import {NgFor} from "@angular/common";
import {JoinOurTeamComponent} from "../../components/join-our-team/join-our-team.component";
import {ListOuthorsComponent} from "../../components/list-outhors/list-outhors.component";

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
    ListOuthorsComponent
  ]
})
export class AboutUsComponent {
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
}
