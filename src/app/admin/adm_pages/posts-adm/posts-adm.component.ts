import {Component, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {RequestService} from "../../../services/request.service";
import {Posts} from "../../../models/posts";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {environment} from "../../../environment/environment";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {DialogPostsComponent} from "../dialog_components/dialog-posts/dialog-posts.component";

@Component({
  selector: 'app-posts-adm',
  templateUrl: './posts-adm.component.html',
  styleUrls: ['./posts-adm.component.css'],
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class PostsAdmComponent implements OnInit{
  dataPosts!: Posts[];

  displayedColumns: string[] = [
    'title',
    'category',
    'created-date',
    'image',
    'description',
    'shortDescription',
    'action'
  ];

  constructor(private reqServ: RequestService, private dialog: MatDialog) {  }

  ngOnInit():void {
    this.getPosts();
  }

  deletePost(id: string):void {
    this.reqServ.deleteData(environment.posts.get + '/' + id)
      .subscribe(():void => {})
    this.getPosts();
  }

  getPosts ():void {
    this.reqServ.getData<Posts[]>(environment.posts.get)
      .subscribe((data:Posts[]):void=>{
        this.dataPosts = data;
      })
  }

  openDialog ():void {
    this.dialog.open(DialogPostsComponent, {
      width: '520px',
    })
  }
}
