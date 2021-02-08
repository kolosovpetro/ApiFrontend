import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {RouterModule} from '@angular/router';
import {GetMoviesComponent} from './get-movies/get-movies.component';
import {PostMovieComponent} from './post-movie/post-movie.component';
import {PatchMovieComponent} from './patch-movie/patch-movie.component';
import {DeleteMovieComponent} from './delete-movie/delete-movie.component';
import {GetMovieByIdComponent} from './get-movie-by-id/get-movie-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    GetMoviesComponent,
    PostMovieComponent,
    PatchMovieComponent,
    DeleteMovieComponent,
    GetMovieByIdComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'get-movies', component: GetMoviesComponent},
      {path: 'add-movie', component: PostMovieComponent},
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
