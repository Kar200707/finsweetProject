import {Component, Input} from '@angular/core';
import {Category} from "../../models/category";

@Component({
  selector: 'app-category-block',
  templateUrl: './categoryblock.component.html',
  styleUrls: [
    './categoryblock.component.css',
    '../../styles/media.css'
  ]
})
export class CategoryblockComponent {
  @Input() dataCategory!: Category
}
