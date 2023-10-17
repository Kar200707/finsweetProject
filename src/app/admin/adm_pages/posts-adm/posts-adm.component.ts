import {Component, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {RequestService} from "../../../services/request.service";
import {Posts} from "../../../models/posts";

const ELEMENT_DATA: any = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-posts-adm',
  templateUrl: './posts-adm.component.html',
  styleUrls: ['./posts-adm.component.css'],
  standalone: true,
  imports: [
    MatTableModule
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
    'shortDescription'
  ];

  constructor(private reqServ: RequestService) {  }

  ngOnInit():void {
    this.reqServ.getData<Posts[]>('http://localhost:3000/posts')
      .subscribe((data:Posts[]):void=>{
        this.dataPosts = data;
      })
  }
}
