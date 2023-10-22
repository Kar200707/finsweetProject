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
import {DialoginputValueService} from "../../../services/dialoginput-value.service";
import {Authors} from "../../../models/authors";

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
  userData: Authors = JSON.parse(localStorage.getItem('userData') ?? 'null').user;

  displayedColumns: string[] = [
    'title',
    'category',
    'created-date',
    'image',
    'description',
    'shortDescription',
    'action'
  ];

  constructor(private reqServ: RequestService, private dialog: MatDialog, private dialogDetails: DialoginputValueService) {  }

  ngOnInit():void {
    this.getPosts();
  }

  deletePost(id: string):void {
    if (confirm('delete this post ?')) {
      this.reqServ.deleteData(environment.posts.get + '/' + id)
        .subscribe(():void => {})
      this.getPosts();
    }
  }

  getPosts ():void {
    this.reqServ.getData<Posts[]>(environment.posts.get)
      .subscribe((data:Posts[]):void=>{
        this.dataPosts = data;
      })
  }

  openAddDialog ():void {
    this.dialog.open(DialogPostsComponent, {
      width: '520px',
    })

    this.dialog.afterAllClosed.subscribe(() => {
      this.getPosts();
    })

    this.dialogDetails.isCalled = 'postAdd'
  }

  openEditDialog (id: any):void {
    this.dialog.open(DialogPostsComponent, {
      width: '520px',
    })

    this.dialog.afterAllClosed.subscribe(():void => {
      this.getPosts();
    })

    this.dialogDetails.dialogPostsValue = id;
    this.dialogDetails.isCalled = 'postEdit'
  }
}
