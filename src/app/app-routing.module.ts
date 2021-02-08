import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GetMovieByIdComponent} from './get-movie-by-id/get-movie-by-id.component';
import {PatchMovieComponent} from './patch-movie/patch-movie.component';
import {DeleteMovieComponent} from './delete-movie/delete-movie.component';

const routes: Routes = [
  {path: 'get-movie-by-id/:id', component: GetMovieByIdComponent},
  {path: 'update-movie/:id', component: PatchMovieComponent},
  {path: 'delete-movie/:id', component: DeleteMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
