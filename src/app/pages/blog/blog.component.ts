import { Component } from '@angular/core';
import {Category} from "../../models/category";
import {Posts} from "../../models/posts";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: [
    './blog.component.css',
    '../../styles/media.css'
  ]
})
export class BlogComponent {
  dataCategory: Category[] = [
    {
      image: 'assets/Images/icons/business.png',
      title: 'Business',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      image: 'assets/Images/icons/startup.png',
      title: 'Startup',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      image: 'assets/Images/icons/economy.png',
      title: 'Economy',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      image: 'assets/Images/icons/technology.png',
      title: 'Technology',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    }
  ]

  dataPosts: Posts[] = [
    {
      id: 1,
      category: 'Startup',
      title: 'Design tips for designers that cover everything you need',
      image: 'assets/Images/business_category_block_blog_img.png',
      description: `
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident.
      `
    },
    {
      id: 2,
      category: 'BUSINESS',
      title: 'How to build rapport with your web design clients',
      image: 'assets/Images/business_category_block_block_img(2).png',
      description: `
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident.
      `
    },
    {
      id: 3,
      category: 'Startup',
      title: 'Logo design trends to avoid in 2022',
      image: 'assets/Images/business_category_block_block_img(3).png',
      description: `
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident.
      `
    },
    {
      id: 4,
      category: 'TECHNOLOGY',
      title: '8 Figma design systems you can download for free today',
      image: 'assets/Images/business_category_block_block_img(4).png',
      description: `
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident.
      `
    },
    {
      id: 5,
      category: 'ECONOMY',
      title: 'Font sizes in UI design: The complete guide to follow',
      image: 'assets/Images/business_category_block_blog_img.png',
      description: `
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident.
      `
    }
  ]
}
