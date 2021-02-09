import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Movies} from '../models/movies';
import {ActivatedRoute, Router} from '@angular/router';
import {PatchResponse} from '../models/patch-response';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-patch-movie',
  templateUrl: './patch-movie.component.html',
  styleUrls: ['./patch-movie.component.css']
})
export class PatchMovieComponent implements OnInit {
  id: string;
  currentDto: Movies;
  response: PatchResponse;
  display = 'none';
  movie$: Observable<Movies>;
  message: string;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.movie$ = apiService
      .getMovieById(this.id)
      .pipe(
        catchError(
          err => {
            if (err.error instanceof ErrorEvent) {
              this.message = `Error ${err.error.message}`;
            } else {
              this.message = `Error ${err.message}`;
            }
            return of([][0]);
          }
        )
      );
  }

  ngOnInit(): void {
    this.movie$.subscribe((data: Movies) => {
      this.currentDto = data;
    });
  }

  patchMovie(): void {
    this.apiService.patchMovie(this.currentDto)
      .pipe(
        catchError(
          err => {
            if (err.error instanceof ErrorEvent) {
              this.message = `Error ${err.error.message}`;
            } else {
              this.message = `Error ${err.message}`;
            }
            return of([][0]);
          }
        )
      ).subscribe((data: PatchResponse | any) => {
      if (data instanceof PatchResponse) {
        this.response = data;
        this.message = `${this.response.message} ${this.response.statusCode}`;
      }
      this.display = 'block';
    });
  }
}
