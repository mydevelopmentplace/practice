import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { PostsComponent } from './layouts/posts/posts.component';
import { UsersComponent } from './layouts/users/users.component';
import { DetailsComponent } from './layouts/details/details.component';
export const AppRoutes: Routes = [
{
    path: 'home',
    component: HomeComponent
},
{ 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full' ,
    data:
    {
        title: 'Home Page',
        breadcrumb: 'Home Page',
    }
},
{
    path: 'posts',
    component: PostsComponent,
    data:
    {
        title: 'Posts Page',
        breadcrumb: 'Home Page',
    }
  },
  {
    path: 'users',
    component: UsersComponent,
    data:
    {
        title: 'Users Page',
        breadcrumb: 'Home Page',
    }
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    data:
    {
        title: 'Details Page',
        breadcrumb: 'Home Page',
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent 
},
]