import {Routes} from "@angular/router";
import {loginGuard} from "../guards/login.guard";
import {adminGuard} from "../guards/admin.guard";
import {userAdmGuard} from "../guards/user-adm.guard";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('../pages/home/home.component').then(m => m.HomeComponent),
        title: 'Home'
      },
      {
        path: 'blog',
        loadComponent: () => import('../pages/blog/blog.component').then(m => m.BlogComponent),
        title: 'Blog'
      },
      {
        path: 'blog-post/:id',
        loadComponent: () => import('../pages/blog-post/blog-post.component').then(m => m.BlogPostComponent),
        title: 'Blog Post'
      },
      {
        path: 'about-us',
        loadComponent: () => import('../pages/about-us/about-us.component').then(m => m.AboutUsComponent),
        title: 'About Us'
      },
      {
        path: 'author/:id',
        loadComponent: () => import('../pages/author/author.component').then(m => m.AuthorComponent),
        title: 'Author'
      },
      {
        path: 'contact',
        loadComponent: () => import('../pages/contact/contact.component').then(m => m.ContactComponent),
        title: 'Contact'
      },
      {
        path: 'privacy-policy',
        loadComponent: () => import('../pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
        title: 'Privacy Policy'
      },
      {
        path: 'category/:id',
        loadComponent: () => import('../pages/category/category.component').then(m => m.CategoryComponent),
        title: 'Category'
      }
    ]
  },
  {
    path: 'admin/login',
    canActivate: [loginGuard],
    loadComponent: () => import('../admin/login/login.component').then(m => m.LoginComponent),
    title: 'Login',
  },
  {
    path: 'admin',
    canActivateChild: [adminGuard],
    loadComponent: () => import('../admin/admin.component').then(m => m.AdminComponent),
    title: 'Admin Panel',
    children: [
      {
        path: '',
        loadComponent: () => import('../admin/adm_pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
        title: 'Admin DashBoard'
      },
      {
        path: 'posts',
        loadComponent: () => import('../admin/adm_pages/posts-adm/posts-adm.component').then(m => m.PostsAdmComponent),
        title: 'Admin Posts'
      },
      {
        path: 'category',
        canActivate: [userAdmGuard],
        loadComponent: () => import('../admin/adm_pages/category-adm/category-adm.component').then(m => m.CategoryAdmComponent),
        title: 'Admin Category'
      },
      {
        path: 'contact',
        canActivate: [userAdmGuard],
        loadComponent: () => import('../admin/adm_pages/contact-us-adm/contact-us-adm.component').then(m => m.ContactUsAdmComponent),
        title: 'Admin Contact Us'
      },
      {
        path: 'privacy-policy',
        canActivate: [userAdmGuard],
        loadComponent: () => import('../admin/adm_pages/privacy-policy-adm/privacy-policy-adm.component').then(m => m.PrivacyPolicyAdmComponent),
        title: 'Admin Privacy Policy'
      },
      {
        path: 'user',
        loadComponent: () => import('../admin/adm_pages/users/users.component').then(m => m.UsersComponent),
        canActivate: [userAdmGuard],
        title: 'Admin Users'
      },
      {
        path: 'register',
        canActivate: [userAdmGuard],
        loadComponent: () => import('../admin/adm_pages/register/register.component').then(m => m.RegisterComponent),
        title: 'Admin Register'
      },
      {
        path: 'subscribe',
        canActivate: [userAdmGuard],
        loadComponent: () => import('../admin/adm_pages/subscribe-adm/subscribe-adm.component').then(m => m.SubscribeAdmComponent),
        title: 'Admin Subscribe'
      },
    ]
  },
  {
    path: '**',
    loadComponent: () => import('../pages/notfound/notfound.component').then(m => m.NotfoundComponent),
    title: '404 page not found'
  }
]
