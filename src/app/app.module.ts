import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {RouterModule} from '@angular/router';
import {GetMoviesComponent} from './get-movies/get-movies.component';
import {PostMovieComponent} from './post-movie/post-movie.component';
import {PatchMovieComponent} from './patch-movie/patch-movie.component';
import {DeleteMovieComponent} from './delete-movie/delete-movie.component';
import {GetMovieByIdComponent} from './get-movie-by-id/get-movie-by-id.component';
import {FormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    GetMoviesComponent,
    PostMovieComponent,
    PatchMovieComponent,
    DeleteMovieComponent,
    GetMovieByIdComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'get-movies', component: GetMoviesComponent},
      {path: '', redirectTo: '/get-movies', pathMatch: 'full'},
      {path: 'add-movie', component: PostMovieComponent},
      {path: '**', component: PageNotFoundComponent},
    ]),
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
