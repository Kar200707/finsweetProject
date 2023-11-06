import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {RequestService} from "../../../services/request.service";
import {DialoginputValueService} from "../../../services/dialoginput-value.service";
import {environment} from "../../../../environment/environment";
import {Authors} from "../../../models/authors";
import {DialogUsersComponent} from "../dialog_components/dialog-users/dialog-users.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule
  ],
  standalone: true
})
export class UsersComponent {
  dataAuthors!: Authors[];

  displayedColumns: string[] = [
    'name',
    'image',
    'superAdmin',
    'biography',
    'action'
  ];

  constructor(
    private reqServ: RequestService,
    private dialog: MatDialog,
    private dialogDetails: DialoginputValueService
  ) {  }

  ngOnInit():void {
    this.getPosts();
  }

  getPosts():void {
    this.reqServ.getData<Authors[]>(environment.author.get)
      .subscribe((data: Authors[]):void =>{
        this.dataAuthors = data;
      })
  }

  deleteUser(id: string):void {
    if (confirm('delete this user ?')) {
      this.reqServ.deleteData(environment.author.get + '/' + id)
        .subscribe(():void => {})
      this.getPosts();
    }
  }

  openEditDialog (id: any):void {
    let isOpened: boolean = true;

    this.dialog.open(DialogUsersComponent, {
      width: '520px',
    })

    this.dialog.afterAllClosed.subscribe(() => {
      if (isOpened) {
        this.getPosts();
        isOpened = false;
      }
    })

    this.dialogDetails.idUser = id;
  }
}
