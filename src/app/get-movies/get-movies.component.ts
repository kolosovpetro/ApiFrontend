import {Component, OnInit} from '@angular/core';
import {Movies} from '../models/movies';
import {ApiService} from '../api.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-get-movies',
  templateUrl: './get-movies.component.html',
  styleUrls: ['./get-movies.component.css']
})
export class GetMoviesComponent implements OnInit {
  moviesList: Movies[];
  movies$: Observable<Movies[]>;
  errorMessage: string;

  constructor(private apiService: ApiService) {
    this.movies$ = apiService
      .getMoviesList()
      .pipe(
        catchError(error => {
          if (error.error instanceof ErrorEvent) {
            this.errorMessage = `Error ${error.error.message}`;
          } else {
            this.errorMessage = `Error ${error.error}`;
          }
          return of([]);
        })
      );
  }

  ngOnInit(): void {
    this.movies$.subscribe((data: Movies[]) => {
      this.moviesList = data;
    });
  }
}
