import {Component, OnInit} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from '@angular/material/select';
import {MatOption} from "@angular/material/core";
import {NgFor} from "@angular/common";
import {RequestService} from "../../../../services/request.service";
import {Category} from "../../../../models/category";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-posts',
  templateUrl: './dialog-posts.component.html',
  styleUrls: ['./dialog-posts.component.css'],
  standalone: true,
  imports: [
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    NgFor,
    MatButtonModule,
  ]
})
export class DialogPostsComponent implements OnInit{
  dataCategory!: Category[];

  constructor (private reqServ: RequestService) {  }

  ngOnInit():void {
    this.reqServ.getData<Category[]>('http://localhost:3000/category')
      .subscribe((data:Category[]):void=>{
        this.dataCategory = data;
      })
  }
}
