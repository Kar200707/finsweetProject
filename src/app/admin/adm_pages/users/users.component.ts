import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {Category} from "../../../models/category";
import {RequestService} from "../../../services/request.service";
import {DialoginputValueService} from "../../../services/dialoginput-value.service";
import {environment} from "../../../environment/environment";
import {DialogCategoryComponent} from "../dialog_components/dialog-category/dialog-category.component";
import {Authors} from "../../../models/authors";

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

  constructor(private reqServ: RequestService) {  }

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
}
