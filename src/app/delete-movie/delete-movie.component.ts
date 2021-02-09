import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Movies} from '../models/movies';
import {ActivatedRoute, Router} from '@angular/router';
import {DeleteResponse} from '../models/delete-response';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
  id: string;
  currentDto: Movies;
  response: DeleteResponse;
  movie$: Observable<Movies>;
  message: string;
  display = 'none';

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.movie$ = apiService
      .getMovieById(this.id)
      .pipe(
        catchError(error => {
          if (error.error instanceof ErrorEvent) {
            this.message = `Error ${error.error.message}`;
          } else {
            this.message = `Error ${error.message}`;
          }
          return of([][0]);
        })
      );
  }

  ngOnInit(): void {
    this.movie$.subscribe((data: Movies) => {
      this.currentDto = data;
    });
  }

  delete(): void {
    this.apiService.deleteMovie(this.id).subscribe(
      (data: DeleteResponse) => {
        this.router.navigateByUrl('get-movies');
      },
      (error => {
        this.message = 'something went wrong or you want to delete F#';
        this.display = 'block';
      })
    );
  }
}
