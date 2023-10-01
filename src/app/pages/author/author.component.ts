import { Component } from '@angular/core';
import {Posts} from "../../models/posts";
import {NgFor} from "@angular/common";
import {PostsComponent} from "../../components/posts/posts.component";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: [
    './author.component.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    NgFor,
    PostsComponent
  ]
})
export class AuthorComponent {
  dataPosts: Posts[] = [
    {
      id: 1,
      category: 'BUSINESS',
      title: 'Font sizes in UI design: The complete guide to follow',
      image: 'assets/Images/stained-glass.png',
      description: `
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua.
      `
    },
    {
      id: 2,
      category: 'ECONOMY',
      title: 'How to build rapport with your web design clients',
      image: 'assets/Images/man-in-black-crew.png',
      description: `
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident.
      `
    }
  ]
}
