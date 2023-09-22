import { Component } from '@angular/core';
import {Posts} from "../../models/posts";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: [
    './category.component.css',
    '../../styles/media.css'
  ]
})
export class CategoryComponent {
  dataPosts: Posts[] = [
    {
      id: 1,
      category: 'BUSINESS',
      title: 'Top 6 free website mockup tools 2022',
      image: 'assets/Images/two-women-img-category-page.png',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Non blandit massa enim nec.
      `
    },
    {
      id: 2,
      category: 'BUSINESS',
      title: 'Step-by-step guide to choosing great font pairs',
      image: 'assets/Images/two-women-img-category-page.png',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Non blandit massa enim nec.
      `
    },
    {
      id: 3,
      category: 'BUSINESS',
      title: 'Ten free foogle fonts that you should use',
      image: 'assets/Images/two-women-img-category-page.png',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Non blandit massa enim nec.
      `
    },
    {
      id: 4,
      category: 'BUSINESS',
      title: 'What did I learn from doing 50+ design sprints?',
      image: 'assets/Images/two-women-img-category-page.png',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Non blandit massa enim nec.
      `
    }
  ]
}
