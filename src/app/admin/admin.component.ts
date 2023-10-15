import { Component } from '@angular/core';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTreeModule, MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {RequestService} from "../services/request.service";
import {MatToolbarModule} from "@angular/material/toolbar";
import {Authors} from "../models/authors";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [
    MatDatepickerModule,
    MatIconModule,
    MatSidenavModule,
    MatTreeModule,
    MatButtonModule,
    MatToolbarModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class AdminComponent{
  userData: Authors = JSON.parse(localStorage.getItem('userData') ?? 'null').user;

  constructor(private reqServ: RequestService, private router: Router) { }

  logOut():void {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    this.router.navigate(['/admin/login'])
  }

  protected readonly window:Window = window;
}
