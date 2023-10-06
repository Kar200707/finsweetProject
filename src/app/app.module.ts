import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import { LayoutComponent } from './layout/layout.component';

import {provideClientHydration} from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'Home'
      },
      {
        path: 'blog',
        loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent),
        title: 'Blog'
      },
      {
        path: 'blog-post',
        loadComponent: () => import('./pages/blog-post/blog-post.component').then(m => m.BlogPostComponent),
        title: 'Blog Post'
      },
      {
        path: 'about-us',
        loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent),
        title: 'About Us'
      },
      {
        path: 'author',
        loadComponent: () => import('./pages/author/author.component').then(m => m.AuthorComponent),
        title: 'Author'
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
        title: 'Contact'
      },
      {
        path: 'privacy-policy',
        loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
        title: 'Privacy Policy'
      },
      {
        path: 'category',
        loadComponent: () => import('./pages/category/category.component').then(m => m.CategoryComponent),
        title: 'Category'
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./pages/notfound/notfound.component').then(m => m.NotfoundComponent),
    title: '404 page not found'
  }
]

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', initialNavigation: 'enabledBlocking' }),
  ],
  providers: [ provideClientHydration() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
