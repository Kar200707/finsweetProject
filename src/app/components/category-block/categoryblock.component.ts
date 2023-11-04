import {Component, Input} from '@angular/core';
import {Category} from "../../models/category";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-category-block',
  templateUrl: './categoryblock.component.html',
  styleUrls: [ './categoryblock.component.css' ],
  standalone: true,
  imports: [
    RouterModule
  ],
})
export class CategoryblockComponent {
  @Input() dataCategory!: Category
}
