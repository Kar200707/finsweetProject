import {Component, Input} from '@angular/core';
import {Authors} from "../../models/authors";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-list-outhors',
  templateUrl: './list-outhors.component.html',
  styleUrls: [
    './list-outhors.component.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    RouterModule,
  ]
})
export class ListOuthorsComponent {
  @Input() dataAuthors!: Authors
}
