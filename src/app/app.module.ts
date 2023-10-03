import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AuthorComponent } from './pages/author/author.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { CategoryComponent } from './pages/category/category.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LayoutComponent } from './layout/layout.component';
import {SharedModule} from "./components/shared/shared.module";

import {provideClientHydration} from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Home'
      },
      {
        path: 'blog',
        component: BlogComponent,
        title: 'Blog'
      },
      {
        path: 'blog-post',
        component: BlogPostComponent,
        title: 'Blog Post'
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
        title: 'About Us'
      },
      {
        path: 'category-block',
        component: CategoryComponent,
        title: 'Category'
      },
      {
        path: 'author',
        component: AuthorComponent,
        title: 'Author'
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact'
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
        title: 'Privacy Policy'
      },
      {
        path: 'category',
        component: CategoryComponent,
        title: 'Category'
      }
    ]
  },
  {
    path: '**',
    component: NotfoundComponent,
    title: '404 page not found'
  }
]

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', initialNavigation: 'enabledBlocking' }),
    SharedModule
  ],
  providers: [ provideClientHydration() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
