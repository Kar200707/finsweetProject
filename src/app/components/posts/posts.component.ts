import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {NgForOf} from "@angular/common";
import {Posts} from "../../models/posts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    NgForOf
  ]
})
export class PostsComponent implements OnInit{
  @Input() dataPosts!: Posts;
  @Input() isPrevPage!:string;
  isPage:string = '';

  constructor() {  }

  ngOnInit():void {
    if (this.isPrevPage === 'blog') {
      this.isPage = 'blogPage'
    } else if (this.isPrevPage === 'category') {
      this.isPage = 'categoryPage'
    } else if (this.isPrevPage === 'author') {
      this.isPage = 'authorPage'
    }
  }
}
