import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { AppRoutes } from './app.router';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { PostsComponent } from './layouts/posts/posts.component';
import { UsersComponent } from './layouts/users/users.component';
import { DetailsComponent } from './layouts/details/details.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { TopbarComponent } from './topbar/topbar/topbar.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from'angularfire2';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './ui/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    SidebarComponent,
    TopbarComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
