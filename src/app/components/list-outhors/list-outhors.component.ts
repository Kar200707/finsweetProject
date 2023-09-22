import {Component, Input} from '@angular/core';
import {Authors} from "../../models/authors";

@Component({
  selector: 'app-list-outhors',
  templateUrl: './list-outhors.component.html',
  styleUrls: [
    './list-outhors.component.css',
    '../../styles/media.css'
  ]
})
export class ListOuthorsComponent {
  @Input() dataAuthors!: Authors
}
