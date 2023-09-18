import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {NgOptimizedImage} from "@angular/common";
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { ListOuthorsComponent } from './components/list-outhors/list-outhors.component';
import { JoinOurTeamComponent } from './components/join-our-team/join-our-team.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AuthorComponent } from './pages/author/author.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import {CategoryblockComponent} from "./components/category-block/categoryblock.component";
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListOuthorsComponent,
    JoinOurTeamComponent,
    BlogComponent,
    BlogPostComponent,
    AboutUsComponent,
    AuthorComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    CategoryblockComponent,
    CategoryComponent
  ],
    imports: [
        BrowserModule,
        NgOptimizedImage,
        RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
